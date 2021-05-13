import 'whatwg-fetch'
import React from 'react'
import { FixedSizeList as List } from "react-window";

import DefaultItem from './DefaultItem'

interface Props {
    items: any[]
    width: number
    height: number
    size: number
    margin: number
    rowCount: number
    rowFactors: number[]
    itemComponent: any
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
    rowParams: any[]
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
            const scrollBarWidth = window.innerWidth - document.body.clientWidth
            if (scrollBarWidth > 0) this.setRowData()
        }, 10)


        this.Row = ({ index, style }) => {
            const rows = this.state.rowsData[index]
            return (<div style={style}>
                {rows.map((row) => {
                    return <div className="row" style={{
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
                })}
            </div>)
        }
    }

    setRowData() {
        this.factors = []
        const rowCount = this.props.rowCount === Infinity ? 10000000 : this.props.rowCount
        Array.from({ length: rowCount }).map((notValue, i) => {
            const index = i % this.props.rowFactors.length
            this.factors.push(this.props.rowFactors[index])
        });

        // 計算している本のindex
        let currentIndex = 0

        // スクロールバーを考慮して狭めにしておく、最後に調整されるので
        const hiradumiWidth = this.hiradumiDiv.clientWidth - 50

        const rowsData = []
        this.factors.some((notValue, index) => {
            let rowTotalWidth = 0
            let rowItemCount = 0
            const height = this.props.size * this.factors[index]
            
            const currentIndexData = this.props.items.slice(currentIndex)
            currentIndexData.some((item) => {
                let width
                if (item.properties && item.properties.aspect) {
                    width = Math.floor(height * item.properties.aspect)
                } else {
                    width = Math.floor(height * 0.666666)
                }              
                // 行よりも大きくなるなら終了
                if (hiradumiWidth <= rowTotalWidth + width) return true
                item.height = height
                item.width = width
                rowTotalWidth += width
                rowItemCount += 1
            })
            if (rowItemCount === 0) return true

            // let rowData = this.props.items.slice(currentIndex, currentIndex + rowItemCount)
            let rowData
            // 残りの横幅分、サイズを調整
            const scaleUpRatio = hiradumiWidth / rowTotalWidth
            // 最後の行の縦が大きすぎないように規制
            if (scaleUpRatio < 2) {
                currentIndexData.some((item, index) => {
                    if (index === rowItemCount) return true
                    item.width = Math.floor(item.width * scaleUpRatio)
                    item.height = Math.floor(item.height * scaleUpRatio)
                })
                rowData = this.props.items.slice(currentIndex, currentIndex + rowItemCount)
            } else {
                // 前の行の調整
                const prevRowData = this.props.items.slice(currentIndex - rowsData[rowsData.length - 1].length, currentIndex)
                // rowTotalWidth分詰めたい
                const scaleDownWidth = rowTotalWidth / prevRowData.length
                prevRowData.some((item) => {
                    item.width = Math.floor(item.width - scaleDownWidth)
                    const scaleDownRatio = item.width / (item.width + scaleDownWidth)
                    item.height = Math.floor(item.height * scaleDownRatio)
                })

                // 今の行のサイズを調整
                const tempRowData = this.props.items.slice(currentIndex, currentIndex + rowItemCount)
                const scaleRatio = prevRowData[0].height / tempRowData[0].height
                tempRowData.some((item) => {
                    item.width = Math.floor(item.width * scaleRatio)
                    item.height = Math.floor(item.height * scaleRatio)
                })

                rowsData.pop()
                rowData = this.props.items.slice(currentIndex - prevRowData.length, currentIndex + rowItemCount)

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

            rowsData.push(rowData)
            currentIndex += rowItemCount
        })

        // this.props.rowFactorsの数毎に配列にして詰める
        const packedRowsData = []
        let rows = []
        console.log(packedRowsData)
        rowsData.map((row, index) => {
            rows.push(row)
            if (index % this.props.rowFactors.length === this.props.rowFactors.length - 1) {
                packedRowsData.push(rows)
                rows = []
            }
        })
        if (rows.length > 0) packedRowsData.push(rows)
        console.log(packedRowsData)

        // 最初のセットで高さを割り出す
        const rowHeights = []
        const heights = []
        packedRowsData[0].map((rowData) => {
            rowData.map((row) => {
                // console.log(rows)
                heights.push(row.height)
            })
            rowHeights.push(Math.max(...heights))
        })
        const itemSize = rowHeights.reduce((size, height) => size + height, 0);

        this.setState({rowsData: packedRowsData, itemSize: itemSize})

    }

    render() {
        if (this.props.items.length === 0) return null

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

export default Hiradumi





