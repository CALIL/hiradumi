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

let isFirefox: boolean | null = null;

const checkFirefox = () => {
    if (isFirefox === null) {
        isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().includes('firefox')
    }
    return isFirefox
}

checkFirefox()

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

    const itemScalesLength = itemScales.length

    let rowWidth = 0
    let rowItems: ItemType[] = []
    let rowCount = 0
    let itemHeight = defaultHeight *  itemScales[rowCount % itemScalesLength]
    let prevRowItems = [] as ItemType[]


    const processedItemsLength = processedItems.length
    for (let i = 0; i < processedItemsLength; i++) {
        const item = processedItems[i]
        // 項目のアスペクト比がないケース対応
        item.aspect = item.aspect || defaultAspect
        const itemWidth = itemHeight * item.aspect
        // 横幅よりも大きい場合
        if (rowItems.length > 0 && width < rowWidth + itemWidth) {
            // 現在の行の項目のwidth,を設定
            const rowItemsLength = rowItems.length
            const ratio = width / rowWidth
            for (let i = 0; i < rowItemsLength; i++) {
                setItemSize(rowItems[i], itemHeight, ratio)
            }
            // 各項目のサイズと横幅をもとに再調整
            adjustItemWidth(rowItems, width)
            prevRowItems = rowItems

            // 新しい行を開始して現在の項目を追加
            rowCount += 1
            itemHeight = defaultHeight * itemScales[rowCount % itemScalesLength]
            rowWidth = itemHeight * item.aspect
            rowItems = [item]
        } else {
            // 現在の行に項目を追加
            rowWidth += itemWidth
            rowItems.push(item)
        }
    }

    // 最後の行の処理
    if (rowItems.length > 0) {
        // 最後の行の項目が3以下の場合、1つ前の行に入れて調整する
        if (rowItems.length <= 3) {
            const prevRowHeight = prevRowItems[0].height
            const rowItemsLength = rowItems.length
            for (let i = 0; i < rowItemsLength; i++) {
                const item = rowItems[i]
                item.height = prevRowHeight
                item.width = item.height * item.aspect
            }
            const lastRowItems = prevRowItems.concat(rowItems)
            let lastRowWidth = 0
            const lastRowItemsLength = lastRowItems.length
            for (let i = 0; i < lastRowItemsLength; i++) {
                lastRowWidth += lastRowItems[i].width
            }
            const ratio = width / lastRowWidth
            for (let i = 0; i < lastRowItemsLength; i++) {
                setItemSize(lastRowItems[i], itemHeight, ratio);
            }
            adjustItemWidth(lastRowItems, width)
        } else {
            const ratio = width / rowWidth
            const rowItremsLength = rowItems.length
            for (let i = 0; i < rowItremsLength; i++) {
                setItemSize(rowItems[i], itemHeight, ratio);
            }
            adjustItemWidth(rowItems, width)
        }
    }

    return processedItems
}

/**
 * 数値の小数点以下を2位までに桁数に制限する
 * 
 * @param value 丸める対象の数値
 * @returns 小数点2位以上に丸められた数値
 */
export const roundToDecimals = (value: number): number => {
    return Math.round(value * 100) / 100
};

/**
 * アイテムのサイズを設定する
 * @param item 対象のアイテム
 * @param itemHeight 基準となる高さ
 * @param ratio 調整比率
 */
export const setItemSize = (item: ItemType, itemHeight: number, ratio: number): void => {
    item.height = roundToDecimals(itemHeight * ratio)
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
 */
const adjustItemWidth = (items: ItemType[], width: number): void => {
    let currentWidth = 0
    const itemLength = items.length
    for (let i = 0; i < itemLength; i++) {
        currentWidth += items[i].width
    }
    // 小数点以下の誤差を考慮して、FirefoxとWebkit系で補正をかける
    const adjustPixel = isFirefox ? 0.05 * items.length : 0.01 * items.length 
    const widthAdjustment = (width - currentWidth - adjustPixel) / items.length
    for (let i = 0; i < itemLength; i++) {
        items[i].width += roundToDecimals(widthAdjustment)
        items[i].height = roundToDecimals(items[i].width / items[i].aspect)
    }
}

