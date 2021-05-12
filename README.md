# hiradumi
アスペクト比を維持して幅ぴったりにレイアウトするReactコンポーネント

![](./screencapture.gif "")

## 主な特徴

- 幅にぴったり合わせたレイアウト
- アスペクト比の違う領域でも組み合わせて配置可能
- 横幅の変化に合わせてレイアウトを自動変更

## デモ
[https://calil.github.io/hiradumi/](https://calil.github.io/hiradumi/)


## 利用方法

### インストール

```
npm install github:CALIL/hiradumi#master
```


[Hiradumi.tsx](./src/Hiradumi.tsx)

```
interface Props {
    items: any[]
    size: number
    margin: number
    rowCount: number
    rowFactors: number[]
    itemComponent: any
    className: string
    sortKey: string | null
}
```

- items　Itemの配列データ  
　　　　　画像のアスペクト比が入った

    ```
    interface Item {
        ...
        properties: {
            aspect: number
        }
    }
    ```
| プロパティ | 型 | 説明 |
| ------------- | ------------- | ------------- |
| size | number | 画像の基準サイズ |
| margin | number | 画像のマージン |
| rowCount | number | 最大行数 上限を不明な場合、Infinityを指定 |
| rowFactors | number[] | 行ごとの比率 |
| itemComponent | ReactComponent | itemを表示するコンポーネント<br />デフォルトは[DefaultItem.tsx](./src/DefaultItem.tsx) |
| className | string | Hiradumiの領域につけるクラス名<br />デフォルトはhiradumi |
| sortKey | string \| null | １行毎のデータの並び替えに使うキーを指定。数値が高いものほど中央に表示する。 |

```
<Hiradumi
    items={}
    size={}
    margin={}
    rowCount={}
    rowFactors={}
    sortKey={}
    className
    itemComponent={}
/>
```


## サンプルコード

[App.tsx](./src/component/App.tsx)

## サンプルデータ

[Gifu_Nakatsugawa_plus.json](./Gifu_Nakatsugawa_plus.json)

# 開発

```bash
npm install
npm start
```

## ビルド手順

```bash
npm install @babel/cli @babel/core -g  
npm run build
```

## ライセンスについて
The MIT License (MIT)

Copyright (c) 2019 CALIL Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.