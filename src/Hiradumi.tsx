import 'whatwg-fetch';
import React, { Component } from 'react';

import HiradumiRow from './HiradumiRow'
import { threadId } from 'node:worker_threads';

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
    rowHeight: number
    rowCount: number
    factors: number[]
    rowParams: any[]
    currentCount: number
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
      Array.from({length: this.state.rowCount}).map((notValue, index) => {
          this.factors.push(this.getFactor(index))
      });
      this.setRowParams()
      this.setRowHeight()
  }

    componentDidMount() {
        window.addEventListener('resize', this.resize.bind(this));
    }
    
    resize() {
        // console.log('resize')
        this.setRowHeight();
        this.setRowParams();
        this.forceUpdate();
    }


    // 縦サイズの係数 4パターン
    getFactor(i) {
        // console.log('getFactor')
        const index = i % 4; // 0 1 2 3
        let factors
        if (window.innerWidth > 767) {
            factors = [1, 0.9, 0.8, 0.7]
        } else {
            factors = [0.97, 0.75, 0.65, 0.55]
        }
        return factors[index]
    }


    setRowHeight() {
        this.rowHeight = 0;
        this.factors.map((factor) => {
            this.rowHeight += this.state.size * factor
        });
    }

    setRowParams() {
        console.log('setRowParams')
        this.rowParams = [];

        // dataから書影のascpetRatioを使う
        // heightが決まっているので、aspectでwidthを決める
        // widthの合計が、枠の横幅以内であればデータを追加

        // 計算している本のindex
        let currentIndex = 0

        Array.from({length: 4}).map((notValue, index) => {
            // 行の高さ
            let height = this.state.size * this.factors[index]

            // 一行に入る数の計算
            let columnCount = 0

            const tempData = this.props.data.slice(currentIndex)
            tempData.map((item, index) => {
                let width = height / item.aspect
                this.props.data[currentIndex+index].width = height
                this.props.data[currentIndex+index].width = width
                columnCount += 1
            })
            this.state.rowsData.push(this.props.data.slice(currentIndex, currentIndex+columnCount))

            currentIndex += columnCount
        });
    }



    render() {
        console.log(this.props.data)
        return (<React.Fragment>
            {this.props.data.length>0 ? (
                <HiradumiRow
                    rowsData={this.state.rowsData}
                    size={this.state.size}
                    rowIndex={1}
                    isScrolling={false}
                    rowParams={this.rowParams}
                    itemComponent={this.props.itemComponent}
                    // onRender={(i) => {
                    //     // 現在の冊数の更新
                    //     this.currentCount = i - this.columnCount;
                    //     if (this.currentCount > this.props.data.length - 100) this.currentCount = this.props.data.length;
                    // }}
                />
            ) : null}
        </React.Fragment>)
    }
}

export default Hiradumi





