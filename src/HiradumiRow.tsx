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
        
        return <div className="row">
            {this.props.rowData.map((item) => {
                return <this.props.itemComponent item={item} margin={this.props.margin} />
            })}
        </div>;
    }

}

export default HiradumiRow