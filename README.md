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
    width: number
    height: number
    padding: number
    itemHeight: number
    itemMargin: number
    rowCount: number
    rowRatios: number[]
    itemComponent: any
    className: string
    sortKey: string | null
}
```

- items　Itemの配列データ  
　　　　　画像のアスペクト比が必須

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
| width | number | Hiradumiの横幅(px) |
| height | number | Hiradumiの縦幅(px) |
| padding | number | Hiradumiの余白(px) |
| items | Item[] | 画像のアスペクト比が入ったItemの配列 |
| itemHeight | number | Itemの高さの基準 |
| itemMargin | number | Itemのマージン |
| rowCount | number | 最大行数 上限を不明な場合、Infinityを指定 |
| rowRatios | number[] | 行ごとの比率 |
| itemComponent | ReactComponent | Itemを表示するコンポーネント<br />デフォルトは[DefaultItem.tsx](./src/DefaultItem.tsx) |
| className | string | Hiradumiの領域につけるクラス名<br />デフォルトはhiradumi |
| sortKey | string \| null | １行毎のデータの並び替えに使うキーを指定。数値が高いものほど中央に表示する。 |

```
<Hiradumi
    width={}
    height={}
    padding={}
    items={}
    itemHeight={}
    itemMargin={}
    rowCount={}
    rowRatios={}
    sortKey={}
    className
    itemComponent={}
/>
```

## 実装コンセプト

- 行の高さの基準値(itemHeight)に、各行の比率(rowRation)をかけて、行の高さを決める
- 行の比率(rowRations)の数だけ、行をつくる
- itemを行に詰めていく
- この繰り返しで、行を表示する
- 各Itemのaspect比は違うので、行の高さのパターンは繰り返しでも違って見える
- これによって、一定の見た目のランダム性、平積み感を出す

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