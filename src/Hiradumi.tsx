import 'whatwg-fetch'
import React from 'react'
import { FixedSizeList as List } from "react-window";

import DefaultItem from './DefaultItem'

function getScrollbarWidth() {
    const outer = document.createElement('div')
    outer.style.visibility = 'hidden'
    outer.style.overflow = 'scroll'
    document.body.appendChild(outer)
  
    const inner = document.createElement('div')
    outer.appendChild(inner)
  
    const scrollBarWidth = (outer.offsetWidth - inner.offsetWidth)
 
    outer.parentNode.removeChild(outer)
    return scrollBarWidth
}

interface Props {
    items: any[]
    width: number
    height: number
    itemHeight: number
    margin: number
    rowCount: number
    rowRatios: number[]
    itemComponent: Element
    className: string
    sortKey: string | null
}
interface State {
    items: any[]
    rowsItems: any[]
    itemSize: number
}

interface Hiradumi {
    Row: any
    rowCount: number
    factors: number[]
}

class Hiradumi extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            items: props.items.map( item => ({...item})),
            rowsItems: [],
            itemSize: 0
        }
        this.factors = []

    }

    componentDidMount() {

        this.setRowData()

        window.addEventListener('resize', this.setRowData.bind(this))

        // PC版のスクロールバー対応
        // コンテンツがないとスクロールバーが出ないので、追加後に再計算
        setTimeout(() => {
            const scrollBarWidth = document.body.offsetWidth - document.body.clientWidth
            if (scrollBarWidth > 0) this.setRowData()
        }, 10)


    }

    setRowData() {
        // 計算しているitemのindex
        let currentItemIndex = 0

        let rowsItems = []
        let prevRowItems

        // スクロールバーがあれば大きめにしておく、最後に調整されるので
        const scrollBarWidth = getScrollbarWidth() > 0 ? 100 : 0
        const rowWidth = this.props.width - scrollBarWidth

        for (let index = 0; index < this.state.items.length; index++) {

            const currentItems = this.state.items.slice(currentItemIndex, currentItemIndex+100)
            if (currentItems.length === 0) break

            // 行の幅の範囲内にアイテムを入れる
            const putItem = (currentItems, rowWidth) => {
                const items = []
                let rowTotalWidth = 0
                const rowRatio = this.props.rowRatios[index % this.props.rowRatios.length]
                const height = this.props.itemHeight * rowRatio
                currentItems.some((item) => {
                    const hasAspect = item.properties && item.properties.aspect
                    const aspect: number = hasAspect ? item.properties.aspect : 0.666666
                    const width = Math.floor(height * aspect)
                    // 行よりも大きくなるなら終了
                    if (rowTotalWidth + width > rowWidth) return true
                    item.height = height
                    item.width = width
                    items.push(item)
                    rowTotalWidth += width
                })
                return items
            }

            let rowItems = putItem(currentItems, rowWidth)

            // 前の行をrowTotalWidth分詰めて、今の行を押し込む
            const scaleAdjust = (items, prevItems, rowTotalWidth) => {
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

            const rowTotalWidth = rowItems.reduce((size, item) => size + item.width, 0)

            // 残りの横幅分、サイズを調整
            const scaleUpRatio = rowWidth / rowTotalWidth
            // 縦が大きすぎないように規制
            if (scaleUpRatio < 2 && rowItems.length > 1) {
                rowItems.some((item, index) => {
                    item.width = Math.floor(item.width * scaleUpRatio)
                    item.height = Math.floor(item.height * scaleUpRatio)
                })
            } else {
                rowItems = scaleAdjust(rowItems, prevRowItems, rowTotalWidth)
                rowsItems.pop()
            }


            // sortKeyでソートして、中央から並べ直す
            const sortCenter = () => {
                const sortLabel = this.props.sortKey
                rowItems.sort(function (a, b) {
                    if (a[sortLabel] < b[sortLabel]) return 1
                    if (a[sortLabel] > b[sortLabel]) return -1
                    return 0
                })
                const newRowData = {}
                const centerIndex = Math.floor(rowItems.length / 2)
                newRowData[centerIndex] = rowItems[0]
                Array.from({ length: centerIndex }).map((item, index) => {
                    if (rowItems[index * 2 + 1]) newRowData[centerIndex - 1 - index] = rowItems[index * 2 + 1]
                    if (rowItems[index * 2 + 2]) newRowData[centerIndex + 1 + index] = rowItems[index * 2 + 2]
                })
                return Object.values(newRowData)
            }
            
            if (this.props.sortKey) rowItems = sortCenter()

            currentItemIndex += rowItems.length
            rowsItems.push(rowItems)

            // prevRowItems = rowItems
            prevRowItems = rowItems.map( item => ({...item}))

        }


        // 配列をn個毎の配列に分割して返す関数
        const splitByNumber = (sourceArray, splitNumber) => {
            const sourceArrayLength  = sourceArray.length
            var splitArray = []
            for(var i = 0; i < Math.ceil(sourceArrayLength / splitNumber); i++) {
                const array = sourceArray.slice(i * splitNumber, i * splitNumber + splitNumber)
                splitArray.push(array)
            }
            return splitArray
        }
        // console.log(splitByNumber([1,2,3,4,5,6,7,8,9,0], 3))
        
        const rowsItemsByRowRatios = splitByNumber(rowsItems, this.props.rowRatios.length)

        // 最初のセットで高さを割り出す
        const rowHeights = []
        let heights = []
        rowsItemsByRowRatios[0].map((rowItems) => {
            rowItems.map((row) => {
                heights.push(row.height)
            })
            rowHeights.push(Math.max(...heights))
            heights = []
        })
        const itemSize = rowHeights.reduce((size, height) => size + height, 0) + this.props.margin / 2
        this.setState({ rowsItems: rowsItemsByRowRatios, itemSize: itemSize })

    }

    Row = ({ index, style }) => {
        const rows = this.state.rowsItems[index]
        return (<div style={style}>
            {rows.map((row) => this.renderRow(row))}
        </div>)
    }

    renderRow(row) {
        return (
            <div className="row" style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
            }}>
                {row.map((item) => {
                    if (this.props.itemComponent) {
                        return <this.props.itemComponent item={item} margin={this.props.margin} sortKey={this.props.sortKey} />
                    } else {
                        return <DefaultItem item={item} margin={this.props.margin} sortKey={this.props.sortKey} />
                    }
                })}
            </div>
        )
    }

    render() {
        if (this.state.items.length === 0) return null
        if (this.state.items.length <= 1000) {
            return (<div
                style={{ width: this.props.width, height: this.props.height }}
                className={this.props.className ? this.props.className : 'hiradumi'}
                ref={this.setHiradumiDiv}>
                {this.state.rowsItems.map((rows) => {
                    // console.log(rows)
                    return rows.map((row) => this.renderRow(row))
                })}
            </div>)
        } else {
            return (<div className={this.props.className ? this.props.className : 'hiradumi'} ref={this.setHiradumiDiv}>
                <List
                    width={this.props.width}
                    height={this.props.height}
                    itemCount={this.state.rowsItems.length}
                    itemSize={this.state.itemSize}
                >
                    {this.Row}
                </List>
            </div>)
        }
    }
}

export default Hiradumi





