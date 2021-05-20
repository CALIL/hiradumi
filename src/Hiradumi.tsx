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
        // 計算している本のindex
        let currentIndex = 0

        const itemLength = this.state.items.length
        const rowRatiosLength = this.props.rowRatios.length
        let rowsItemsByRowRatios = []
        let rowsItems = []
        let rowItems = []
        let prevRowData
        let rowItemCount = 0
        let rowTotalWidth = 0
        // スクロールバーがあれば大きめにしておく、最後に調整されるので
        const scrollBarWidth = getScrollbarWidth() > 0 ? 100 : 0
        const rowWidth = this.props.width - scrollBarWidth

        for (let index = 0; index < itemLength; index++) {

            const currentItems = this.state.items.slice(currentIndex)
            if (currentItems.length === 0) break

            // 行の幅の範囲内にアイテムを入れる
            const rowRatio = this.props.rowRatios[index % rowRatiosLength]
            const height = this.props.itemHeight * rowRatio
            currentItems.some((item) => {
                let aspect: number
                if (item.properties && item.properties.aspect) {
                    aspect = item.properties.aspect
                } else {
                    aspect = 0.666666
                }
                const width = Math.floor(height * aspect)
                // 行よりも大きくなるなら終了
                if (rowTotalWidth + width > rowWidth) return true
                item.height = height
                item.width = width
                rowItems.push(item)
                rowTotalWidth += width
                rowItemCount += 1
            })

            // 残りの横幅分、サイズを調整
            const scaleUpRatio = rowWidth / rowTotalWidth
            // 最後の行の縦が大きすぎないように規制
            if (scaleUpRatio < 2 || scaleUpRatio > 2.5) {
                rowItems.some((item, index) => {
                    item.width = Math.floor(item.width * scaleUpRatio)
                    item.height = Math.floor(item.height * scaleUpRatio)
                })
            } else {
                // rowTotalWidth分詰めたい
                const scaleDownWidth = rowTotalWidth / prevRowData.length
                prevRowData.some((item) => {
                    const scaleDownRatio = item.width / (item.width + scaleDownWidth)
                    item.width = Math.floor(item.width * scaleDownRatio)
                    item.height = Math.floor(item.height * scaleDownRatio)
                })

                // 今の行のサイズを調整
                const scaleRatio = prevRowData[0].height / rowItems[0].height
                rowItems.some((item) => {
                    item.width = Math.floor(item.width * scaleRatio)
                    item.height = Math.floor(item.height * scaleRatio)
                })
                rowsItems.pop()
            }

            // sortLabelでソートして、中央から並べ直す
            if (this.props.sortKey) {
                const sortLabel = this.props.sortKey
                rowItems.sort(function (a, b) {
                    if (a[sortLabel] < b[sortLabel]) return 1;
                    if (a[sortLabel] > b[sortLabel]) return -1;
                    return 0;
                });
                const newRowData = {}
                const rowLength = rowItems.length
                const centerIndex = Math.floor(rowLength / 2)
                newRowData[centerIndex] = rowItems[0]
                Array.from({ length: centerIndex }).map((item, index) => {
                    if (rowItems[index * 2 + 1]) newRowData[centerIndex - 1 - index] = rowItems[index * 2 + 1]
                    if (rowItems[index * 2 + 2]) newRowData[centerIndex + 1 + index] = rowItems[index * 2 + 2]
                })
                rowItems = Object.values(newRowData)
            }

            currentIndex += rowItemCount
            rowsItems.push(rowItems)

            prevRowData = rowItems
            rowItems = []
            rowItemCount = 0
            rowTotalWidth = 0

            // rowRatiosの長さ毎に行を入れていく
            if (rowsItems.length === this.props.rowRatios.length) {
                rowsItemsByRowRatios.push(rowsItems)
                rowsItems = []
            }
            if (rowsItemsByRowRatios.length === this.props.rowCount) break

        }

        // 余りがあれば追加する
        if (rowsItems.length > 0) {
            rowsItemsByRowRatios.push(rowsItems)
        }


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





