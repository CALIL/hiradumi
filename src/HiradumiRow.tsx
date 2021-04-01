import React, { Component } from 'react';

interface Props {
    data: any
    size: number
    isScrolling: boolean
    rowParams: any[]
    rowIndex: number
    columnCount: number
    onRender: (lastCount:number) => void
    itemComponent: any
}
interface State {
}

interface HiradumiRow {
    totalCount: number
    lastCount: number
    size: number
}


class HiradumiRow extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props)
      console.log(props)
      this.lastCount = 0
      this.size = this.props.size * window.devicePixelRatio
    }

 
    rowRender(rowIndex) {
        // console.log('rowRender')
        let {height, width, columnCount} = this.props.rowParams[rowIndex];

        // 書影APIのサイズ
        let size = this.size;
        if (this.props.isScrolling || columnCount >= 20) size = 120

        let items = [];
        let i;
        Array.from({length: columnCount}).map((notValue, columnIndex) => {
            i =  (this.props.columnCount * this.props.rowIndex) + this.totalCount + columnIndex;
            if (i < this.props.data.length) {
                items.push(<this.props.itemComponent item={this.props.data[i]} height={height} width={width} />);
            }
        });

        this.totalCount += columnCount;
        this.lastCount = i;
        return <div key={'hiradumiRow'+i} className="row" style={{display: 'flex'}}>{items}</div>;

    }

    render() {
        this.totalCount = 0;
        let rows = [];
        Array.from({length: this.props.rowParams.length}).map((notValue, index) => {
            let items = this.rowRender(index);
            rows.push(items);
        });
        this.props.onRender(this.lastCount);
        return rows;
    }
}

export default HiradumiRow