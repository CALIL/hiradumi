import React, { Component } from 'react';

function execCopy(string) {
  var tmp = document.createElement('div');
  var pre = document.createElement('pre');
  pre.style.webkitUserSelect = 'auto';
  pre.style.userSelect = 'auto';
  tmp.appendChild(pre).textContent = string;
  var s = tmp.style;
  s.position = 'fixed';
  s.right = '200%';
  document.body.appendChild(tmp);
  document.getSelection().selectAllChildren(tmp);
  var result = document.execCommand("copy");
  document.body.removeChild(tmp);
  return result;
}

class SettingUI extends Component {
  constructor(props) {
    super(props);
  }

  setRowHeight() {
    let rowHeightList = [];
    Array.prototype.slice.call(document.querySelectorAll('.rowHeight')).map(rowHeight => {
      if (rowHeight.value !== '') {
        rowHeightList.push(parseInt(rowHeight.value));
      } else {
        rowHeightList.push(parseInt(rowHeight.placeholder));
      }
    });
    this.props.onChange({
      rowHeightList: rowHeightList
    });
  }

  copy() {
    let rowHeightList = [];
    Array.prototype.slice.call(document.querySelectorAll('.rowHeight')).map(rowHeight => {
      if (rowHeight.value !== '') {
        rowHeightList.push(rowHeight.value);
      } else {
        rowHeightList.push(parseFloat(rowHeight.placeholder));
      }
    });
    execCopy(rowHeightList.toString());
  }

  setRowFactors() {
    const rowFactors = [];
    Array.prototype.slice.call(document.querySelectorAll('input[type="number"]')).map(input => {
      rowFactors.push(input.value);
    });
    this.props.onChange({
      rowFactors: rowFactors
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '10px'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      htmlFor: "width"
    }, "Width:"), /*#__PURE__*/React.createElement("input", {
      type: "range",
      id: "width",
      name: "width",
      min: "10",
      max: "100",
      step: "10",
      defaultValue: "100",
      onChange: e => this.props.onChange({
        width: e.target.value
      })
    }), this.props.width, "% \xA0", /*#__PURE__*/React.createElement("label", {
      htmlFor: "margin"
    }, "Margin:"), /*#__PURE__*/React.createElement("input", {
      type: "range",
      id: "margin",
      name: "width",
      min: "0",
      max: "30",
      value: this.props.margin,
      onChange: e => this.props.onChange({
        margin: parseInt(e.target.value)
      })
    }), this.props.margin, "\xA0", /*#__PURE__*/React.createElement("label", {
      htmlFor: "margin"
    }, "RowCount:"), /*#__PURE__*/React.createElement("input", {
      type: "range",
      id: "maxRow",
      name: "width",
      min: "1",
      max: "30",
      value: this.props.rowCount,
      onChange: e => this.props.onChange({
        rowCount: parseInt(e.target.value)
      })
    }), this.props.rowCount), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "RowFactors:"), this.props.rowFactors.map((rowHeight, i) => {
      return /*#__PURE__*/React.createElement("input", {
        type: "number",
        placeholder: String(rowHeight),
        value: String(rowHeight),
        step: "0.1",
        className: "rowHeight",
        key: i,
        onChange: this.setRowFactors.bind(this),
        style: {
          width: '3rem'
        }
      });
    }), /*#__PURE__*/React.createElement("button", {
      onClick: this.copy.bind(this)
    }, "Copy")));
  }

}

export default SettingUI;