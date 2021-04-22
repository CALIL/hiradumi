import React, { Component } from 'react';
import Hiradumi from '../Hiradumi';
import SettingUI from './SettingUI';
// import items from '../Kochi_Motoyama_plus.json';
import items from '../../Gifu_Nakatsugawa_plus.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      size: 200,
      width: 100,
      margin: 10,
      rowCount: 10,
      rowFactors: null
    };
    this.hiradumi = null;

    this.setHiradumi = element => {
      this.hiradumi = element;
    };
  }

  componentDidMount() {
    if (document.body.clientWidth > 767) {
      this.setState({
        rowFactors: [1, 0.9, 0.8, 0.7]
      });
    } else {
      this.setState({
        rowFactors: [0.97, 0.75, 0.65, 0.55]
      });
    }
  }

  onChange(state) {
    this.setState(state, () => {
      this.hiradumi.setRowData();
    });
  }

  render() {
    if (!this.state.items) return null;
    return /*#__PURE__*/React.createElement("div", null, this.state.rowFactors ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SettingUI, {
      size: this.state.size,
      width: this.state.width,
      margin: this.state.margin,
      rowCount: this.state.rowCount,
      rowFactors: this.state.rowFactors,
      onChange: this.onChange.bind(this)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: this.state.width + '%',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Hiradumi, {
      ref: this.setHiradumi,
      data: this.state.items,
      size: this.state.size,
      margin: this.state.margin,
      rowCount: this.state.rowCount,
      rowFactors: this.state.rowFactors,
      itemComponent: null
    }))) : null);
  }

}

export default App;