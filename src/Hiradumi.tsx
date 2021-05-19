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
    size: number
    margin: number
    rowCount: number
    rowFactors: number[]
    itemComponent: Element
    className: string
    sortKey: string | null
}
interface State {
    rowsData: any[]
    itemSize: number
}

interface Hiradumi {
    Row: any
    rowCount: number
    factors: number[]
    hiradumiDiv: HTMLDivElement
    setHiradumiDiv: (element) => void
}

class Hiradumi extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            rowsData: [],
            itemSize: 0
        }
        this.factors = []

        this.hiradumiDiv = null

        this.setHiradumiDiv = element => {
            this.hiradumiDiv = element
        }
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

        const itemLength = this.props.items.length
        const rowFactorsLength = this.props.rowFactors.length
        let rowsDataByFactors = []
        let rowsData = []
        let rowData = []
        let prevRowData
        let rowItemCount = 0
        let rowTotalWidth = 0
        const scrollBarWidth = getScrollbarWidth()
        // スクロールバーを考慮して狭めにしておく、最後に調整されるので
        const hiradumiWidth = this.hiradumiDiv.clientWidth - (scrollBarWidth > 0 ? 100 : 0)
        for (let index = 0; index < itemLength; index++) {
            const rowFactorsIndex = index % rowFactorsLength

            const currentItems = this.props.items.slice(currentIndex)
            if (currentItems.length === 0) break

            const height = this.props.size * this.props.rowFactors[rowFactorsIndex]
            currentItems.some((item) => {
                let aspect
                if (currentItems[0].properties && currentItems[0].properties.aspect) {
                    aspect = currentItems[0].properties.aspect
                } else {
                    aspect = 0.666666
                }
                const width = Math.floor(height * aspect)
                // 行よりも大きくなるなら終了
                if (rowTotalWidth + width > hiradumiWidth) return true
                item.height = height
                item.width = width
                rowData.push(item)
                rowTotalWidth += width
                rowItemCount += 1

            })

            // 残りの横幅分、サイズを調整
            const scaleUpRatio = hiradumiWidth / rowTotalWidth
            // 最後の行の縦が大きすぎないように規制
            if (scaleUpRatio < 2 || scaleUpRatio > 2.5) {
                rowData.some((item, index) => {
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
                const scaleRatio = prevRowData[0].height / rowData[0].height
                rowData.some((item) => {
                    item.width = Math.floor(item.width * scaleRatio)
                    item.height = Math.floor(item.height * scaleRatio)
                })
                rowsData.pop()
            }

            // sortLabelでソートして、中央から並べ直す
            if (this.props.sortKey) {
                const sortLabel = this.props.sortKey
                rowData.sort(function (a, b) {
                    if (a[sortLabel] < b[sortLabel]) return 1;
                    if (a[sortLabel] > b[sortLabel]) return -1;
                    return 0;
                });
                const newRowData = {}
                const rowLength = rowData.length
                const centerIndex = Math.floor(rowLength / 2)
                newRowData[centerIndex] = rowData[0]
                Array.from({ length: centerIndex }).map((item, index) => {
                    if (rowData[index * 2 + 1]) newRowData[centerIndex - 1 - index] = rowData[index * 2 + 1]
                    if (rowData[index * 2 + 2]) newRowData[centerIndex + 1 + index] = rowData[index * 2 + 2]
                })
                rowData = Object.values(newRowData)
            }

            currentIndex += rowItemCount
            rowsData.push(rowData)

            prevRowData = rowData
            rowData = []
            rowItemCount = 0
            rowTotalWidth = 0

            // rowFactorsの長さ毎に行を入れていく
            if (rowsData.length === this.props.rowFactors.length) {
                rowsDataByFactors.push(rowsData)
                rowsData = []
            }
            if (rowsDataByFactors.length === this.props.rowCount) break

        }

        // 余りがあれば追加する
        if (rowsData.length > 0) {
            rowsDataByFactors.push(rowsData)
        }


        // 最初のセットで高さを割り出す
        const rowHeights = []
        let heights = []
        rowsDataByFactors[0].map((rowData) => {
            rowData.map((row) => {
                heights.push(row.height)
            })
            rowHeights.push(Math.max(...heights))
            heights = []
        })
        const itemSize = rowHeights.reduce((size, height) => size + height, 0) + this.props.margin / 2
        this.setState({ rowsData: rowsDataByFactors, itemSize: itemSize })

    }

    Row = ({ index, style }) => {
        const rows = this.state.rowsData[index]
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
        if (this.props.items.length === 0) return null
        if (this.props.items.length <= 1000) {
            return (<div
                style={{ width: this.props.width, height: this.props.height }}
                className={this.props.className ? this.props.className : 'hiradumi'}
                ref={this.setHiradumiDiv}>
                {this.state.rowsData.map((rows) => {
                    // console.log(rows)
                    return rows.map((row) => this.renderRow(row))
                })}
            </div>)
        } else {
            return (<div className={this.props.className ? this.props.className : 'hiradumi'} ref={this.setHiradumiDiv}>
                <List
                    width={this.props.width}
                    height={this.props.height}
                    itemCount={this.state.rowsData.length}
                    itemSize={this.state.itemSize}
                >
                    {this.Row}
                </List>
            </div>)
        }
    }
}

export default Hiradumi





