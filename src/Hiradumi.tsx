import 'whatwg-fetch';
import React, { Component } from 'react';

import HiradumiRow from './HiradumiRow'

interface Props {
    data: any[]
    size: number
    margin: number
    rowCount: number
    rowFactors: number[]
    itemComponent: any
}
interface State {
    size: number
    rowsData: any[]
    rowCount: number
}

interface Hiradumi {
    rowCount: number
    factors: number[]
    rowParams: any[]
    hiradumiDiv: HTMLDivElement
    setHiradumiDiv: (element) => void 
}


class Hiradumi extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props)
      this.state ={
          size: this.props.size ? this.props.size : 200,
          rowCount: this.props.rowCount ? this.props.rowCount : 4,
          rowsData: [],
      }
      this.rowCount = 0
      this.factors = []

      this.hiradumiDiv = null;

      this.setHiradumiDiv = element => {
        this.hiradumiDiv = element;
      }
    }

    componentDidMount() {
        Array.from({length: this.state.rowCount}).map((notValue, i) => {
            const index = i % this.props.rowFactors.length
            this.factors.push(this.props.rowFactors[index])
        });
        
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
        // 計算している本のindex
        let currentIndex = 0
        const scrollBarWidth = window.innerWidth - document.body.clientWidth
        const hiradumiWidth = this.hiradumiDiv.clientWidth - scrollBarWidth
        const rowsData = []
        // すべての本を処理するまで繰り返す
        while(currentIndex < this.props.data.length) {
            this.factors.some((notValue, index) => {
                // すべての本の処理が終わったらループから抜ける
                if (rowsData.length >= this.props.rowCount) {
                    currentIndex = this.props.data.length
                    return true
                } 
                // 行の横幅
                let rowWidth = 0
                // 行の高さ
                let height = this.state.size * this.factors[index]
                // 一行に入る数
                let columnCount = 0
                const currentIndexData = this.props.data.slice(currentIndex)
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

                // 残りの横幅分、サイズを調整
                const scaleUpRatio = hiradumiWidth / rowWidth
                // 最後の行の縦が大きすぎないように規制
                if (scaleUpRatio < 2) {
                    currentIndexData.some((item, index) => {
                        if (index === columnCount) return true
                        item.width = Math.floor(item.width * scaleUpRatio)
                        item.height = Math.floor(item.height * scaleUpRatio)
                    })
                    const rowData = this.props.data.slice(currentIndex, currentIndex+columnCount)
                    rowsData.push(rowData)
                } else {

                    // 前の行の調整
                    const prevRowData = this.props.data.slice(currentIndex-rowsData[rowsData.length-1].length, currentIndex)
                    // rowWidth分詰めたい
                    const scaleDownWidth = rowWidth / prevRowData.length
                    prevRowData.some((item, index) => {
                        item.width = Math.floor(item.width - scaleDownWidth)
                        const scaleDownRatio = item.width / (item.width + scaleDownWidth)
                        item.height = Math.floor(item.height * scaleDownRatio)
                    })

                    // 今の行のサイズを調整
                    const rowData = this.props.data.slice(currentIndex, currentIndex+columnCount)
                    const scaleRatio = prevRowData[0].height / rowData[0].height
                    rowData.some((item, index) => {
                        item.width = Math.floor(item.width * scaleRatio)
                        item.height = Math.floor(item.height * scaleRatio)
                    })

                    rowsData.pop()
                    const newRowData = this.props.data.slice(currentIndex-prevRowData.length, currentIndex+columnCount)
                    rowsData.push(newRowData)
                }
                currentIndex += columnCount
            });
        }
        this.setState({rowsData})
    }

    render() {
        if (this.props.data.length===0) return null
        return (<div className="hiradumi" ref={this.setHiradumiDiv}>
            {Array.from({length: this.state.rowsData.length}).map((notValue, index) => {
                return <HiradumiRow
                    rowData={this.state.rowsData[index]}
                    margin={this.props.margin}
                    itemComponent={this.props.itemComponent}
                />
            })}
        </div>)
    }
}

export default Hiradumi





