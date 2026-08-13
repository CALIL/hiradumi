// @vitest-environment jsdom
//
// マウントスモークテスト。
// ビルドや型チェックでは検出できない「マウント時に例外が出て何も描画されない」
// 事故(2026-08-07 に別リポジトリで React 19 化により semantic-ui-react 内部の
// findDOMNode がクラッシュし、本番が4日間白画面になった)を PR の時点で捕まえる。
// このコンポーネントは react-window の VariableSizeList に依存しているので、
// renderToStaticMarkup では足りず、createRoot で実際にマウントする必要がある。
// tsconfig の jsx が "react"(classic) なので、JSX を書くファイルでは React の import が必要
import React, {act, StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {expect, test} from 'vitest'

import DefaultItem from './DefaultItem'
import Hiradumi from './Hiradumi'

declare global {
    var IS_REACT_ACT_ENVIRONMENT: boolean
}
globalThis.IS_REACT_ACT_ENVIRONMENT = true

const items = [
    {isbn: '9784873115658', title: 'テスト書影なし1', author: '著者1', properties: {aspect: 1.4}},
    {isbn: '9784295017530', title: 'テスト書影なし2', author: '著者2', properties: {aspect: 1.4}},
    {isbn: '9784798172958', title: 'テスト書影なし3', author: '著者3', properties: {aspect: 1.4}},
]

test('items を渡すとマウントでき、item がすべて描画される', async () => {
    const container = document.body.appendChild(document.createElement('div'))

    await act(async () => {
        createRoot(container).render(
            <StrictMode>
                <Hiradumi
                    width={800}
                    height={600}
                    padding={8}
                    className="hiradumi"
                    items={items}
                    itemHeight={200}
                    itemMargin={4}
                    itemComponent={DefaultItem}
                    rowCount={3}
                    rowRatios={[1]}
                    sortKey={null}
                    onScroll={() => {}}
                    scrollTo={{key: '', value: null}}
                    headerComponent={null}
                    headerHeight={0}
                    footerComponent={null}
                    footerHeight={0}
                    innerStyle={{}}
                />
            </StrictMode>,
        )
    })

    // 外側の className が付いた要素が1つ出る
    expect(container.querySelectorAll('.hiradumi')).toHaveLength(1)
    // DefaultItem は書影リンクを描くので、items の数だけ <a> が出る
    expect(container.querySelectorAll('a')).toHaveLength(items.length)
    expect(container.textContent).toContain('テスト書影なし1')
})

test('rowCount のぶんだけ1行に並べ、item に幅と余白が付く', async () => {
    const container = document.body.appendChild(document.createElement('div'))

    await act(async () => {
        createRoot(container).render(
            <StrictMode>
                <Hiradumi
                    width={800}
                    height={600}
                    padding={8}
                    className="hiradumi"
                    items={items}
                    itemHeight={200}
                    itemMargin={4}
                    itemComponent={DefaultItem}
                    rowCount={3}
                    rowRatios={[1]}
                    sortKey={null}
                    onScroll={() => {}}
                    scrollTo={{key: '', value: null}}
                    headerComponent={null}
                    headerHeight={0}
                    footerComponent={null}
                    footerHeight={0}
                    innerStyle={{}}
                />
            </StrictMode>,
        )
    })

    // items 3件・rowCount 3 なので1行に3件入る
    const rows = Array.from(container.querySelectorAll('.row'))
    expect(rows).toHaveLength(1)
    const cells = Array.from(rows[0].querySelectorAll('.item')) as HTMLElement[]
    expect(cells).toHaveLength(items.length)

    // 幅の計算が走っていること（0 や NaN になっていない）。
    // なお「幅ぴったりに敷き詰まる」ことそのものは、ここでは検証できない。
    // 行は display:flex で、item の style.width は縮む前の希望幅にすぎず、
    // 実際の描画幅は flex の計算結果になる。jsdom はレイアウトを計算しないため、
    // ここで幅の合計を見ると内側幅(784px)を超えた値(860px)が取れてしまう。
    // 敷き詰めの検証が必要になったら実ブラウザ(Playwright 等)で行うこと。
    for (const cell of cells) {
        expect(parseFloat(cell.style.width)).toBeGreaterThan(0)
        expect(cell.style.marginRight).not.toBe('')
    }
})
