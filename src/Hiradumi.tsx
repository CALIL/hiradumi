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
        this.factors.map((notValue, index) => {
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

            // 残りの横幅分、サイズを調整
            const scaleUpRatio = hiradumiWidth / rowWidth
            // 最後の行の縦が大きすぎないように規制
            if (scaleUpRatio < 2) {
                currentIndexData.some((item, index) => {
                    if (index === columnCount) return true
                    item.width = Math.floor(item.width * scaleUpRatio)
                    item.height = Math.floor(item.height * scaleUpRatio)
                })
            }

            const rowData = this.props.data.slice(currentIndex, currentIndex+columnCount)
            rowsData.push(rowData)

            currentIndex += columnCount
        });
        this.setState({rowsData})
    }

    render() {
        let rows = []
        Array.from({length: this.state.rowsData.length}).map((notValue, index) => {
            let items = <HiradumiRow
                rowData={this.state.rowsData[index]}
                size={this.state.size}
                rowIndex={1}
                isScrolling={false}
                itemComponent={this.props.itemComponent}
            />
            rows.push(items);
        });

        if (this.props.data.length===0) return null
        return (<div className="hiradumi" ref={this.setHiradumiDiv}>
            {rows}
        </div>)
    }
}

export default Hiradumi





