// 行の高さの基準値(itemHeight)に、各行の比率(itemScales)をかけて、行の高さを決める
// Itemの横幅を行の高さとaspect比をもとにを決めて行に入れていく
// 行の横幅がwidthを超えたら、行の高さを基準値に戻して、次の行を作る
// 各Itemのaspect比は違うので、行の高さのパターンは繰り返しでも違って見える
// これによって、一定の見た目のランダム性、平積み感を出す

export type ItemType = {
    type: 'text' | 'image'
    title: string
    isbn?: string
    width: number
    height: number
    aspect: number
}


type LayoutOptions = {
    width: number
    defaultHeight?: number  // オプショナル
    defaultAspect?: number  // オプショナル
    itemScales?: number[] // オプショナル
}

/**
 * 項目群のレイアウトを計算し、各項目のサイズを調整する
 * 
 * 横幅に応じて項目を行に詰め込み、各行の高さと項目の幅を最適化します。
 * アスペクト比を維持しながら、指定された幅に収まるように項目を配置します。
 * 項目がはみ出す場合、新しい行に追加します。
 * 
 * @param items 配置する項目の配列
 * @param options レイアウトのオプション（幅、高さ、アスペクト比など）
 * @returns サイズ調整された項目の配列
 */
export const layoutCalculator = (items: ItemType[], options: LayoutOptions): ItemType[] => {
    const { 
        width, 
        defaultHeight = 100,  // デフォルト値を設定 
        defaultAspect = 2/3,   // デフォルト値を設定
        itemScales = [1.5, 1.2, 1, 0.8, 0.6] // デフォルト値を設定
    } = options

    const processedItems = structuredClone(items)

    let rowWidth = 0
    let rowItems: ItemType[] = []
    let rowCount = 0
    let itemHeight = defaultHeight *  itemScales[rowCount % itemScales.length]
    let prevRowItems = [] as ItemType[]

    processedItems.forEach((item) => {
        // 項目のアスペクト比がないケース対応
        item.aspect = item.aspect || defaultAspect
        const itemWidth = itemHeight * item.aspect
        // 横幅よりも大きい場合
        if (rowItems.length > 0 && width < rowWidth + itemWidth) {
            // 現在の行の項目のwidth,を設定
            rowItems.forEach((rowItem) => {
                setItemSize(rowItem, itemHeight, width / rowWidth)
            })
            // 各項目のサイズと横幅をもとに再調整
            adjustItemWidth(rowItems, width)
            prevRowItems = rowItems

            // 新しい行を開始して現在の項目を追加
            rowCount += 1
            itemHeight = defaultHeight * itemScales[rowCount % itemScales.length]
            rowWidth = itemHeight * item.aspect
            rowItems = [item]
        } else {
            // 現在の行に項目を追加
            rowWidth += itemWidth
            rowItems.push(item)
        }
    })

    // 最後の行の処理
    if (rowItems.length > 0) {
        // 最後の行の項目が3以下の場合、1つ前の行に入れて調整する
        if (rowItems.length <= 3) {
            rowItems.forEach((rowItem) => {
                rowItem.height = prevRowItems[0].height
                rowItem.width = rowItem.height * rowItem.aspect
            })
            const lastRowItems = prevRowItems.concat(rowItems)
            const lastRowWidth = lastRowItems.reduce((acc, item) => acc + item.width, 0)
            lastRowItems.forEach((rowItem) => {
                setItemSize(rowItem, itemHeight, width / lastRowWidth)
            })
            adjustItemWidth(lastRowItems, width)
        } else {
            rowItems.forEach((rowItem) => {
                setItemSize(rowItem, itemHeight, width / rowWidth)
            })
            adjustItemWidth(rowItems, width)
        }
    }

    return processedItems
}

/**
 * 数値の小数点以下を指定した桁数に制限する
 * 
 * @param value 丸める対象の数値
 * @param decimals 小数点以下の桁数（デフォルト: 2）
 * @returns 指定した桁数に丸められた数値
 */
export const roundToDecimals = (value: number, decimals: number = 2): number => {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
};

/**
 * アイテムのサイズを設定する
 * @param item 対象のアイテム
 * @param itemHeight 基準となる高さ
 * @param ratio 調整比率
 */
export const setItemSize = (item: ItemType, itemHeight: number, ratio: number): void => {
    item.height = itemHeight * ratio
    item.width = roundToDecimals(item.height * item.aspect)
}

/**
 * 行内の項目の幅を調整して、指定された全体幅に正確に合わせる
 * 
 * setItemSizeで設定された幅の合計と指定された全体幅の差分を、
 * 行内の全ての項目に均等に分配します。これにより、わずかな隙間や
 * はみ出しを防ぎ、行全体がピッタリと指定幅に収まります。
 * 
 * @param items 調整対象の項目配列（同じ行に属する項目）
 * @param width 行全体の目標幅
 * @param itemHeight 基準となる高さ
 */
const adjustItemWidth = (items: ItemType[], width: number): void => {
    const diffWidth = items.reduce((acc, item) => acc + item.width, 0)
    const adjustPixelForFirefox = 0.05 * items.length // Firefoxのクセを考慮
    const addWidth = roundToDecimals((width - diffWidth - adjustPixelForFirefox) / items.length)
    items.forEach((item) => {
        item.width += addWidth
        item.height = item.width / item.aspect
    })
}

