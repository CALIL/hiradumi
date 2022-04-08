import React, {useState, useEffect} from 'react'
// @ts-ignore
import { VariableSizeList as List } from 'react-window'

import DefaultItem from './DefaultItem'

interface Props {
    width: number
    height: number
    padding: number
    className: string

    items: any[]
    itemHeight: number
    itemMargin: number
    itemComponent: any

    rowCount: number
    rowRatios: number[]

    sortKey: string | null
    onScroll: (event:any) => void
    scrollTo: {
        key: string
        value: any
    }

    headerComponent: any
    headerHeight: number
    footerComponent: any
    footerHeight: number
    innerStyle: any
}

// VariableSizeListのestimatedItemSizeは、最初の1回しか処理されないため
// propsの変更の際、一度消してから表示する
let prevProps: any = null
const HiradumiWrapper = (props: Props) => {
    const [show, setShow] = useState(true)
    const [lock, setLock] = useState(false)
    let timer: any
    useEffect(() => {
        setShow(false)
        timer = setTimeout(() => setShow(true), 100)
    }, [props]);

    // itemsがない場合は、estimatedItemSizeが出せないので、なにも処理しない
    // VariableSizeListのestimatedItemSizeは、最初の1回しか処理されないため
    // https://github.com/bvaughn/react-window/blob/d80bef25fe706d0c73fc801674c086f681811190/src/VariableSizeList.js#L274
    if (props.items===undefined || props.items===null || props.items.length===0) return null

    if (show===false) return null
    return <Hiradumi {...props} />
}
export default HiradumiWrapper


const Hiradumi = (props: Props) => {

    let Items = props.items.map( item => ({...item}))
    let Rows: any[] = []
    let HiradumiDiv: any = null
    let PrevScrollTo = {key: null, value: null}

    let rowHeights: number[] = []
    let rows: any[] = []
    let prevRowItems: any[] = []

    if (props.headerComponent) {
        rows.push({type: 'header', component: props.headerComponent})
        rowHeights.push(props.headerHeight)
    }

    // rowに入れる処理済みのItemのindex
    let putInRowIndex = 0
    let itemsInProcess = Items.slice(putInRowIndex, putInRowIndex+100)

    const rowMaxWidth = props.width - props.padding * 2 - getScrollbarWidth()
    for (let i = 0; itemsInProcess.length > 0 && rows.length <= props.rowCount; i++) {
        const rowRatioIndex = i % props.rowRatios.length
        const rowRatio = props.rowRatios[rowRatioIndex]

        // 行の幅の範囲内にアイテムを入れる
        let rowItems = putItem(itemsInProcess, rowMaxWidth, rowRatio, props.itemHeight, props.itemMargin)

        const rowWidth = rowItems.reduce((size, item) => size + item.width, 0)

        // 残りの横幅分、サイズを調整
        const scaleUpRatio = rowMaxWidth / rowWidth

        // 縦が大きすぎないように規制 && 最後の行が1冊以上の場合
        if (scaleUpRatio < 2 && rowItems.length > 1) {
            rowItems.some((item) => {
                item.width = Math.floor(item.width * scaleUpRatio)
                item.height = Math.floor(item.height * scaleUpRatio)
            })
        } else {
            if (prevRowItems.length > 0) {
                // 前の行をrowTotalWidth分詰めて、今の行を押し込む
                rowItems = pushPreviousRow(rowItems, prevRowItems, rowWidth)
                rows.pop()
                rowHeights.pop()
            }
        }

        // sortKeyでソートして、中央から並べ直す
        if (props.sortKey) rowItems = sortCenter(rowItems, props.sortKey)

        rows.push(rowItems)
        prevRowItems = rowItems
        
        // 行の高さを割り出してセット
        let heights:number[] = []
        rowItems.forEach((item) => {
            heights.push(item.height + props.itemMargin)
        })
        rowHeights.push(Math.max(...heights))

        putInRowIndex += rowItems.length
        itemsInProcess = Items.slice(putInRowIndex, putInRowIndex+100)

    }

    if (props.footerComponent) {
        rows.push({type: 'footer', component: props.footerComponent})
        rowHeights.push(props.footerHeight)
    }

    Rows = rows

    const ScrollTo = (key: string, value: any) => {
        let index: number
        // 対象となるitemを探す
        Rows.some((items, i) => {
            if (typeof items.type==='undefined' && items.filter((item: any)=> item[key] === value).length > 0) {
                index = i
                return true
            }
        })
        // スクロール量を計算
        let scrollHeight = props.padding
        rowHeights.some((rowHeight, i) => {
            if (i===index) return true
            scrollHeight += rowHeight
        })
        // 表示item数が多い場合のためにスクロールを何度か行う
        const timer: any = setInterval(() => {
            if (HiradumiDiv.firstElementChild.scrollTop >= scrollHeight) return clearTimeout(timer)
            // console.log(HiradumiDiv.firstElementChild.scrollTop)
            HiradumiDiv.firstElementChild.scrollTo(0, scrollHeight)
        }, 1)
        setTimeout(() => clearTimeout(timer), 1000)
    }

    // スクロールするか判定
    if (props.scrollTo && props.scrollTo.value !== PrevScrollTo.value) {
        const {key, value} = props.scrollTo
        setTimeout(() => {
            ScrollTo(key, value)
        }, 100)
        PrevScrollTo = JSON.parse(JSON.stringify(props.scrollTo))
    }

    let totalHeight = 0
    rowHeights.some((rowHeight, i) => {
        totalHeight += rowHeight
    })
    // console.log('totalHeight:' + totalHeight)
    // console.log('Rows.length:' + Rows.length)
    const estimatedItemSize = totalHeight/Rows.length
    // console.log('estimatedItemSize:' + estimatedItemSize)

    return (<div className={props.className ? props.className : 'hiradumi'} ref={(element) => HiradumiDiv = element}>
        <List
            width={props.width}
            height={props.height}
            itemCount={Rows.length}
            itemSize={(index: number) => rowHeights[index]}
            estimatedItemSize={estimatedItemSize}
            onScroll={(event: any) => {
                if (!HiradumiDiv) return
                const scrollArea = HiradumiDiv.firstElementChild
                event.scrollTop = scrollArea.scrollTop
                event.scrollBottom = scrollArea.scrollHeight - scrollArea.clientHeight - scrollArea.scrollTop
                props.onScroll(event)
            }}
            style={props.innerStyle}
        >
            {(rowItem: any) => {

                const row = Rows[rowItem.index]
                const rowStyle = JSON.parse(JSON.stringify(rowItem.style))
                rowStyle.display = 'flex'
                rowStyle.justifyContent = 'space-between'
        
                if (typeof row.type==='undefined') {
                    // paddingを反映
                    rowStyle.top = rowItem.style.top + 'px'
                    rowStyle.left = props.padding + 'px'
                    rowStyle.width = `calc(100% - ${props.padding * 2}px)`
                    rowStyle.boxSizing = 'border-box'
                    return (
                        <div className="row" style={rowStyle} key={'row'}>
                            {row.map((item: any, index: number) => {
                                let width = item.width
                                let height = item.height
                                return (<div key={'item' + index} className="item" id={item.id} style={{
                                    display: 'inline-block',
                                    width: width + 'px',
                                    height: height + 'px',
                                    margin: props.itemMargin / 2 + 'px'
                                }}>
                                {(() => {
                                    if (props.itemComponent) {
                                        return <props.itemComponent item={item} margin={props.itemMargin} sortKey={props.sortKey} />
                                    } else {
                                        return <DefaultItem item={item} margin={props.itemMargin} sortKey={props.sortKey} />
                                    }
                                })()}
                                </div>)
                            })}
                        </div>
                    )
                // ヘッダー・フッター
                } else {
                    rowStyle.top = rowItem.style.top + 'px'
                    rowStyle.marginTop = props.itemMargin / 2
                    return (
                        <div className="row" style={rowStyle}>
                            <row.component />
                        </div>
                    )
                }
            }}
        </List>
    </div>)
}


function getScrollbarWidth() {
    const outer = document.createElement('div')
    outer.style.visibility = 'hidden'
    outer.style.overflow = 'scroll'
    document.body.appendChild(outer)
  
    const inner = document.createElement('div')
    outer.appendChild(inner)
  
    const scrollBarWidth = (outer.offsetWidth - inner.offsetWidth)
 
    if (outer.parentNode) outer.parentNode.removeChild(outer)
    return scrollBarWidth
}

// 行の幅の範囲内にアイテムを入れる
const putItem = (currentItems: any[], rowWidth: number, rowRatio: number, itemHeight: number, itemMargin: number) => {
    const items:any[] = []
    let rowTotalWidth = 0
    
    const height = itemHeight * rowRatio
    currentItems.some((item) => {
        const hasAspect = item.properties && item.properties.aspect
        const aspect: number = hasAspect ? item.properties.aspect : 0.666666
        const width = Math.floor(height * aspect) + itemMargin
        // 行よりも大きくなるなら終了
        if (rowTotalWidth + width > rowWidth) {
            if (items.length > 0) return true
        }
        item.height = height
        item.width = width
        items.push(item)
        rowTotalWidth += width
    })
    return items
}

// 前の行をrowTotalWidth分詰めて、今の行を押し込む
const pushPreviousRow = (items: any[], prevItems: any[], rowTotalWidth: number) => {
    const prevRowTotalWidth = prevItems.reduce((size, item) => size + item.width, 0)
    const scaleDownRatio = prevRowTotalWidth / (prevRowTotalWidth + rowTotalWidth)
    prevItems.some((item) => {
        item.width = Math.floor(item.width * scaleDownRatio)
        item.height = Math.floor(item.height * scaleDownRatio)
    })
    // 今の行のサイズを調整
    const scaleRatio = prevItems[0].height / items[0].height
    items.some((item) => {
        item.width = Math.floor(item.width * scaleRatio)
        item.height = Math.floor(item.height * scaleRatio)
    })
    return prevItems.concat(items)
}

// sortKeyでソートして、中央から並べ直す
const sortCenter = (items: any[], sortLabel: string) => {
    if (sortLabel) {
        items.sort(function (a, b) {
            if (a[sortLabel] < b[sortLabel]) return 1
            if (a[sortLabel] > b[sortLabel]) return -1
            return 0
        })
    }
    const newRowData: any = {}
    const centerIndex = Math.floor(items.length / 2)
    newRowData[centerIndex] = items[0]
    Array.from({ length: centerIndex }).forEach((item, index) => {
        if (items[index * 2 + 1]) newRowData[centerIndex - 1 - index] = items[index * 2 + 1]
        if (items[index * 2 + 2]) newRowData[centerIndex + 1 + index] = items[index * 2 + 2]
    })
    return Object.values(newRowData)
}
