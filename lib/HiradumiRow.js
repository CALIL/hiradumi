import React from 'react';

class HiradumiRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = [];
    return /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, this.props.rowData.map(item => {
      return /*#__PURE__*/React.createElement(this.props.itemComponent, {
        item: item,
        margin: this.props.margin
      });
    }));
  }

}

export default HiradumiRow;