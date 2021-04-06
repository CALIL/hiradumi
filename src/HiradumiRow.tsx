import React, { Component } from 'react';

interface Props {
    rowData: any[]
    margin: number
    itemComponent: any
}
interface State {
}

interface HiradumiRow {
    size: number
}


class HiradumiRow extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props)
    }
 
    render() {
        let items = [];
        this.props.rowData.map((item) => {
            items.push(<this.props.itemComponent item={item} margin={this.props.margin} />);
        })
        return <div className="row">{items}</div>;
    }

}

export default HiradumiRow