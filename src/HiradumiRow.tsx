import React, { Component } from 'react';

interface Props {
    rowsData: any
    size: number
    isScrolling: boolean
    rowIndex: number
    // columnCount: number
    // onRender: (lastCount:number) => void
    itemComponent: any
}
interface State {
}

interface HiradumiRow {
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

        // 書影APIのサイズ
        let size = this.size;
        if (this.props.isScrolling) size = 120

        let items = [];
        this.props.rowsData.map((data) => {
            data.map((item) => {
                items.push(<this.props.itemComponent item={item} />);
            })
        })

        return <div key={'hiradumiRow'+rowIndex} className="row">{items}</div>;

    }

    render() {
        let rows = [];
        Array.from({length: this.props.rowsData.length}).map((notValue, index) => {
            let items = this.rowRender(index);
            rows.push(items);
        });
        // this.props.onRender(this.lastCount);
        return rows;
    }
}

export default HiradumiRow