// 行の高さの基準値(itemHeight)に、各行の比率(rowRation)をかけて、行の高さを決める
// 行の比率(rowRations)の数だけ、行をつくる
// Itemをaspect比をもとに横幅を決めて行に詰めていく
// この繰り返しで、行を表示する
// 各Itemのaspect比は違うので、行の高さのパターンは繰り返しでも違って見える
// これによって、一定の見た目のランダム性、平積み感を出す


type Item = {
    width: number
    height: number
    aspect: number
}

export const layoutCalcurator = (items: Item[], width: number, defaultHight: number = 100, defaultAspect: number = 2/3) => {
    let rowWidth = 0
    let rowItems: Item[] = []
    let itemHeight = 0
    items.map((item) => {
        const aspect = item.aspect ? item.aspect : defaultAspect
        itemHeight = defaultHight
        const itemWidth = itemHeight * aspect
        if (width < rowWidth + itemWidth) {
            rowItems.map((item) => {
                setItemSize(item, itemHeight, width, rowWidth)
            })
            rowWidth = 0
            rowItems = []
            itemHeight = 0
        }
        rowWidth += itemWidth
        rowItems.push(item)
    })
    if (rowItems.length > 0) {
        rowItems.map((item) => {
            setItemSize(item, itemHeight, width, rowWidth)
        })
    }
    return items
}

export const setItemSize = (item: Item, itemHeight: number, width: number, totalWidth: number) => {
    const fixAspect = width / totalWidth
    item.height = itemHeight * fixAspect
    item.width = item.height * item.aspect
}
