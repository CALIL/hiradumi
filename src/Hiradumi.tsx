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
    rowCount: number
}

interface Hiradumi {
    rowHeight: number
    rowCount: number
    columnCount: number
    factors: number[]
    rowParams: any[]
    currentCount: number
}


class Hiradumi extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props)
      this.state ={
          size: this.props.size ? this.props.size : 200,
          rowCount: this.props.rowCount ? this.props.rowCount : 4
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
        this.columnCount = 0;
        this.rowParams = [];
        Array.from({length: 4}).map((notValue, index) => {
            // 書影の高さ・幅 一行に入る数の計算
            let height = this.state.size * this.factors[index];
            let width = height / 1.5;
            let columnCount = Math.floor(window.innerWidth / width) - 1;

            this.columnCount += columnCount;
            console.log(columnCount)
            this.rowParams.push({
                columnCount: columnCount,
                width: width,
                height: height
            });
        });
    }



    render() {
        console.log(this.props.data)
        return (<React.Fragment>
            {this.props.data.length>0 ? (
                <HiradumiRow
                    data={this.props.data}
                    size={this.state.size}
                    rowIndex={1}
                    isScrolling={false}
                    columnCount={this.columnCount}
                    rowParams={this.rowParams}
                    itemComponent={this.props.itemComponent}
                    onRender={(i) => {
                        // 現在の冊数の更新
                        this.currentCount = i - this.columnCount;
                        if (this.currentCount > this.props.data.length - 100) this.currentCount = this.props.data.length;
                }} />
            ) : null}
        </React.Fragment>)
    }
}

export default Hiradumi





