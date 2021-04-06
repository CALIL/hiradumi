import 'whatwg-fetch';
import React, { Component } from 'react';

import HiradumiRow from './HiradumiRow'

interface Props {
    data: any[]
    size: number
    rowCount: number
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
    // currentCount: number
    hiradumiDiv: HTMLDivElement
    setHiradumiDiv: (element) => void 
}


class Hiradumi extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props)
      this.state ={
          size: this.props.size ? this.props.size : 200,
          rowCount: this.props.rowCount ? this.props.rowCount : 4,
          rowsData: []
      }
      this.rowCount = 0
      this.factors = []

      this.hiradumiDiv = null;

      this.setHiradumiDiv = element => {
        this.hiradumiDiv = element;
      }
    }

    componentDidMount() {
        Array.from({length: this.state.rowCount}).map((notValue, index) => {
            this.factors.push(this.getFactor(index))
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
    
    // 縦サイズの係数 4パターン
    getFactor(i) {
        const index = i % 4; // 0 1 2 3
        let factors
        if (this.hiradumiDiv.clientWidth > 767) {
            factors = [1, 0.9, 0.8, 0.7]
        } else {
            factors = [0.97, 0.75, 0.65, 0.55]
        }
        return factors[index]
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
            // 一行に入る数の計算
            let columnCount = 0
            const currentIndexData = this.props.data.slice(currentIndex)
            currentIndexData.some((item, index) => {
                if (item.properties && item.properties.aspect) {
                    let width = Math.floor(height * item.properties.aspect)
                    if (hiradumiWidth > rowWidth + width) {
                        item.height = height
                        item.width = width
                        rowWidth += width
                        columnCount += 1
                    } else {
                        return true
                    }
                } else {
                    let width = Math.floor(height * 0.66666)
                    if (hiradumiWidth > rowWidth + width) {
                        item.height = height
                        item.width = width
                        rowWidth += width
                        columnCount += 1
                    } else {
                        return true
                    }
                }
            })

            const scaleUpRatio = hiradumiWidth / rowWidth
            currentIndexData.some((item, index) => {
                if (index === columnCount) return true
                item.width = Math.floor(item.width * scaleUpRatio)
                item.height = Math.floor(item.height * scaleUpRatio)
            })

            const rowData = this.props.data.slice(currentIndex, currentIndex+columnCount)
            rowsData.push(rowData)

            currentIndex += columnCount
        });
        // let count = 0
        // rowsData.map((rowData) => {
        //     count += rowData.length
        //     rowData.map(item => {
        //         if (item.width === undefined) {
        //             console.log(item)
        //         }
        //     })
        // })
        // console.log(count)
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
                // onRender={(i) => {
                //     // 現在の冊数の更新
                //     this.currentCount = i - this.columnCount;
                //     if (this.currentCount > this.props.data.length - 100) this.currentCount = this.props.data.length;
                // }}
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





