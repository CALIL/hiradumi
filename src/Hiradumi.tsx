import 'whatwg-fetch'
import React, { Component } from 'react'

import HiradumiRow from './HiradumiRow'
import Book from './component/Book'


interface Props {
    items: any[]
    size: number
    margin: number
    rowCount: number
    rowFactors: number[]
    itemComponent: any
    sortKey: string | null
}
interface State {
    rowsData: any[]
}

interface Hiradumi {
    rowCount: number
    factors: number[]
    rowParams: any[]
    hiradumiDiv: HTMLDivElement
    setHiradumiDiv: (element) => void 
}

const styles = `
.row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap
}
`

const bookStyles = `
.row .hiradumiBook {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    animation: fadeIn 1s ease 0s 1 normal;
    overflow: hidden;
    cursor: pointer;
}
  
.row .hiradumiBook .sortKey {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
    background-color: #999;
    border-radius: 50px;
    width: 2rem;
    height: 2rem;
}

.row .hiradumiBook.nocover {
    border: 1px solid #eee
}

.row .hiradumiBook.nocover .bg {
    position: absolute;
    background-color: #eee;
    width: 80%;
    height: 100%;
    top: 0;
    left: 10%;
    z-index: -1
}

.row .hiradumiBook.nocover .textCover {
    position: relative;
    height: 100%;
    width: 100%;
    padding: 30% 0 0
}

.row .hiradumiBook.nocover .textCover .title {
    position: relative;
    width: 90%;
    margin: 0 auto;
    color: #333;
    font-weight: bold;
    margin-bottom: 5px;
    line-height: 120%;
    z-index: 1;
    word-wrap: break-word;
    overflow-wrap: break-word
}

.row .hiradumiBook.nocover .textCover .author {
    position: relative;
    width: 90%;
    margin: 0 auto;
    font-size: 80%;
    color: #e00;
    font-weight: bold;
    z-index: 1
}

@keyframes fadeIn {
    0% {
        opacity: 0
    }

    100% {
        opacity: 1
    }
}
`

class Hiradumi extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props)
      this.state ={
          rowsData: []
      }
      this.factors = []

      this.hiradumiDiv = null

      this.setHiradumiDiv = element => {
        this.hiradumiDiv = element
      }
    }

    componentDidMount() {
        
        this.setRowData()

        // PC版のスクロールバー対応
        // コンテンツがないとスクロールバーが出ないので、追加後に再計算
        setTimeout(() => {
            const scrollBarWidth = window.innerWidth - document.body.clientWidth
            if (scrollBarWidth > 0) this.setRowData()
        }, 10)

        window.addEventListener('resize', this.setRowData.bind(this))
    }
    
    setRowData() {
        this.factors = []
        Array.from({length: this.props.rowCount}).map((notValue, i) => {
            const index = i % this.props.rowFactors.length
            this.factors.push(this.props.rowFactors[index])
        });

        // 計算している本のindex
        let currentIndex = 0
        const scrollBarWidth = window.innerWidth - document.body.clientWidth
        const hiradumiWidth = this.hiradumiDiv.clientWidth - scrollBarWidth
        const rowsData = []
        this.factors.some((notValue, index) => {
            // 行の横幅
            let rowWidth = 0
            // 行の高さ
            let height = this.props.size * this.factors[index]
            // 一行に入る数
            let columnCount = 0
            const currentIndexData = this.props.items.slice(currentIndex)
            currentIndexData.some((item) => {
                let width
                let isRowLastItem = false
                if (item.properties && item.properties.aspect) {
                    width = Math.floor(height * item.properties.aspect)
                    isRowLastItem = hiradumiWidth <= rowWidth + width
                } else {
                    width = Math.floor(height * 0.66666)
                    isRowLastItem = hiradumiWidth <= rowWidth + width
                }
                // 行の最後のアイテムなら終了
                if (isRowLastItem) return true
                item.height = height
                item.width = width
                rowWidth += width
                columnCount += 1
            })
            if(columnCount===0) return true

            let rowData
            // 残りの横幅分、サイズを調整
            const scaleUpRatio = hiradumiWidth / rowWidth
            // 最後の行の縦が大きすぎないように規制
            if (scaleUpRatio < 2) {
                currentIndexData.some((item, index) => {
                    if (index === columnCount) return true
                    item.width = Math.floor(item.width * scaleUpRatio)
                    item.height = Math.floor(item.height * scaleUpRatio)
                })
                rowData = this.props.items.slice(currentIndex, currentIndex+columnCount)
            } else {
                // 前の行の調整
                const prevRowData = this.props.items.slice(currentIndex-rowsData[rowsData.length-1].length, currentIndex)
                // rowWidth分詰めたい
                const scaleDownWidth = rowWidth / prevRowData.length
                prevRowData.some((item) => {
                    item.width = Math.floor(item.width - scaleDownWidth)
                    const scaleDownRatio = item.width / (item.width + scaleDownWidth)
                    item.height = Math.floor(item.height * scaleDownRatio)
                })

                // 今の行のサイズを調整
                const tempRowData = this.props.items.slice(currentIndex, currentIndex+columnCount)
                const scaleRatio = prevRowData[0].height / tempRowData[0].height
                tempRowData.some((item) => {
                    item.width = Math.floor(item.width * scaleRatio)
                    item.height = Math.floor(item.height * scaleRatio)
                })

                rowsData.pop()
                rowData = this.props.items.slice(currentIndex-prevRowData.length, currentIndex+columnCount)
            }


            // sortLabelでソートして、中央から並べ直す
            if (this.props.sortKey) {
                const sortLabel = this.props.sortKey
                rowData.sort(function(a,b){
                    if(a[sortLabel] < b[sortLabel]) return 1;
                    if(a[sortLabel] > b[sortLabel]) return -1;
                    return 0;
                });
                const newRowData = {}
                const rowLength = rowData.length
                const centerIndex = Math.floor(rowLength / 2)
                newRowData[centerIndex] = rowData[0]
                Array.from({length: centerIndex}).map((item, index) => {
                    if (rowData[index*2+1]) newRowData[centerIndex-1-index] = rowData[index*2+1]
                    if (rowData[index*2+2]) newRowData[centerIndex+1+index] = rowData[index*2+2]
                })
                rowData = Object.values(newRowData)
            }

            rowsData.push(rowData)
            currentIndex += columnCount
        })
        this.setState({rowsData})
    }

    render() {
        if (this.props.items.length===0) return null
        let css = styles
        if (!this.props.itemComponent) {
            css += bookStyles
        }
        return (<div className="hiradumi" ref={this.setHiradumiDiv}>
            <style>{css}</style>
            {Array.from({length: this.state.rowsData.length}).map((notValue, index) => {
                return <HiradumiRow
                    rowData={this.state.rowsData[index]}
                    margin={this.props.margin}
                    itemComponent={this.props.itemComponent ? this.props.itemComponent : Book}
                    sortKey={this.props.sortKey}
                />
            })}
        </div>)
    }
}

export default Hiradumi





