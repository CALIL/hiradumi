import React, { Component } from 'react';

function execCopy(string){
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
  

export default class SettingUI extends Component {
    constructor(props) {
      super(props);
    }
    setRowHeight() {
        let rowHeightList = []
        Array.prototype.slice.call(document.querySelectorAll('.rowHeight')).map((rowHeight) => {
          if(rowHeight.value!=='') {
            rowHeightList.push(rowHeight.value);
          } else {
            rowHeightList.push(parseInt(rowHeight.placeholder));
          }
        });
        this.props.onChange({rowHeightList: rowHeightList});
    }
    copy() {
        let rowHeightList = []
        Array.prototype.slice.call(document.querySelectorAll('.rowHeight')).map((rowHeight) => {
          if(rowHeight.value!=='') {
            rowHeightList.push(rowHeight.value);
          } else {
            rowHeightList.push(parseInt(rowHeight.placeholder));
          }
        });
        execCopy(rowHeightList.toString())
    }    
    render() {
        return (
            <div style={{maxWidth: '1400px', margin: '0 auto', padding: '10px'}}>
              <div>
                <label htmlFor="width">Width:</label>
                <input type="range" id="width" name="width" min="1" max="10" onChange={(e) => this.props.onChange({width: e.target.value * 10})} />
                {this.props.width}%
                &nbsp;
                <label htmlFor="margin">Margin:</label>
                <input type="range" id="margin" name="width" min="1" max="30" value={this.props.margin} onChange={(e) => this.props.onChange({margin: parseInt(e.target.value)})} />
                {this.props.margin}
                &nbsp;
                <label htmlFor="margin">MaxRows:</label>
                <input type="range" id="maxRow" name="width" min="1" max="30" onChange={(e) => this.props.onChange({maxRow: parseInt(e.target.value)})} />
                {this.props.maxRow}
              </div>
              <br />
              <div>
                <label>RowHeightList:</label>
                {this.props.rowHeightList.map((rowHeight, i) => {
                  return <input type="number" placeholder={rowHeight} className="rowHeight" key={i} index={i} onChange={this.setRowHeight.bind(this)} style={{width: '3rem'}} />
                })}
                <button onClick={this.copy.bind(this)}>Copy</button>
              </div>
            </div>
        );

    }
}