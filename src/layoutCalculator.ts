// 行の高さの基準値(itemHeight)に、各行の比率(rowRatio)をかけて、行の高さを決める
// 行の比率(rowRatios)の数だけ、行をつくる
// Itemをaspect比をもとに横幅を決めて行に詰めていく
// この繰り返しで、行を表示する
// 各Itemのaspect比は違うので、行の高さのパターンは繰り返しでも違って見える
// これによって、一定の見た目のランダム性、平積み感を出す


type Item = {
    width: number
    height: number
    aspect: number
}


type LayoutOptions = {
    width: number
    defaultHeight?: number  // オプショナル
    defaultAspect?: number  // オプショナル
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
export const layoutCalculator = (items: Item[], options: LayoutOptions): Item[] => {
    const { 
        width, 
        defaultHeight = 100,  // デフォルト値を設定 
        defaultAspect = 2/3   // デフォルト値を設定
    } = options

    const processedItems = structuredClone(items)

    let rowWidth = 0
    let rowItems: Item[] = []
    let itemHeight = defaultHeight

    processedItems.forEach((item) => {
        // 項目のアスペクト比がないケース対応
        item.aspect = item.aspect || defaultAspect
        itemHeight = defaultHeight
        const itemWidth = itemHeight * item.aspect
        if (rowItems.length > 0 && width < rowWidth + itemWidth) {
            // 現在の行の項目のサイズを調整
            rowItems.forEach((rowItem) => {
                setItemSize(rowItem, itemHeight, width / rowWidth)
            })
            // 新しい行を開始して現在の項目を追加
            rowWidth = itemWidth
            rowItems = [item]
        } else {
            // 現在の行に項目を追加
            rowWidth += itemWidth
            rowItems.push(item)
        }
    })

    // 最後の行の処理
    if (rowItems.length > 0) {
        rowItems.forEach((rowItem) => {
            setItemSize(rowItem, itemHeight, width / rowWidth)
        })
    }

    return processedItems
}

/**
 * アイテムのサイズを設定する
 * @param item 対象のアイテム
 * @param itemHeight 基準となる高さ
 * @param widthRatio 幅の調整比率
 */
export const setItemSize = (item: Item, itemHeight: number, widthRatio: number): void => {
    item.height = itemHeight * widthRatio
    item.width = item.height * item.aspect
}
