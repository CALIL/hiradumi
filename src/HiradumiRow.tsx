import React, { Component } from 'react';

interface Props {
    rowData: any[]
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
    // lastCount: number
    size: number
}


class HiradumiRow extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props)
    //   this.lastCount = 0
      this.size = this.props.size * window.devicePixelRatio
    }
 
    render() {
        let items = [];
        this.props.rowData.map((item) => {
            items.push(<this.props.itemComponent item={item} />);
        })
        return <div className="row">{items}</div>;
    }

}

export default HiradumiRow