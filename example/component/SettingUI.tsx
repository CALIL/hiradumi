import React, { Component } from 'react'

function execCopy(string){
  var tmp = document.createElement('div')
  var pre = document.createElement('pre')
  pre.style.webkitUserSelect = 'auto'
  pre.style.userSelect = 'auto'
  tmp.appendChild(pre).textContent = string
  var s = tmp.style
  s.position = 'fixed'
  s.right = '200%'
  document.body.appendChild(tmp)
  document.getSelection().selectAllChildren(tmp)
  var result = document.execCommand("copy")
  document.body.removeChild(tmp)
  return result
}

interface Props {
  itemHeight: number,
  width: number,
  margin: number,
  rowCount: number,
  rowRatios: number[] | null,
  sortKey: string | null
  onChange: (state: any) => void
}

interface State {

}

class SettingUI extends Component<Props, State> {
    constructor(props) {
      super(props)
    }
    setRowHeight() {
        let rowHeightList = []
        Array.prototype.slice.call(document.querySelectorAll('.rowHeight')).map((rowHeight) => {
          if(rowHeight.value!=='') {
            rowHeightList.push(parseInt(rowHeight.value))
          } else {
            rowHeightList.push(parseInt(rowHeight.placeholder))
          }
        })
        this.props.onChange({rowHeightList: rowHeightList})
    }
    copy() {
        let rowHeightList = []
        Array.prototype.slice.call(document.querySelectorAll('.rowHeight')).map((rowHeight) => {
          if(rowHeight.value!=='') {
            rowHeightList.push(rowHeight.value)
          } else {
            rowHeightList.push(parseFloat(rowHeight.placeholder))
          }
        })
        execCopy(rowHeightList.toString())
    }
    setSortKey(sortKeyCheckBox) {
      if (sortKeyCheckBox.checked) {
        this.props.onChange({sortKey: 'term_popular_count'})
      } else {
        this.props.onChange({sortKey: null})
      }
    }
    setRowFactors() {
      const rowRatios = []
      Array.prototype.slice.call(document.querySelectorAll('input[type="number"]')).map((input) => {
        rowRatios.push(input.value)
      })
      this.props.onChange({rowRatios: rowRatios})
    }
    render() {
        return (
            <div id="settingsUI" style={{maxWidth: '1400px', margin: '0 auto', padding: '10px'}}>
              <div>
                {/* <label htmlFor="width">Width:</label>
                <input type="range" id="width" name="width" min="10" max="100" step="10" defaultValue="100" onChange={(e) => this.props.onChange({width: e.target.value})} />
                {this.props.width}px
                &nbsp; */}
                <label htmlFor="margin">itemHeight:</label>
                <input type="range" id="itemHeight" name="width" min="10" max="600" value={this.props.itemHeight} onChange={(e) => this.props.onChange({itemHeight: parseInt(e.target.value)})} />
                {this.props.itemHeight}
                &nbsp;
                <label htmlFor="margin">margin:</label>
                <input type="range" id="margin" name="width" min="0" max="50" value={this.props.margin} onChange={(e) => this.props.onChange({margin: parseInt(e.target.value)})} />
                {this.props.margin}
                &nbsp;
                <label htmlFor="margin">rowCount:</label>
                <input type="range" id="rowCount" name="width" min="1" max="30" value={this.props.rowCount} onChange={(e) => this.props.onChange({rowCount: parseInt(e.target.value)})} />
                {this.props.rowCount}
                &nbsp;&nbsp;
                <label htmlFor="sortKey">sortKey:</label>
                <input type="checkbox" id="sortKey" name="sortKey" value={this.props.sortKey} defaultChecked={true} onChange={(e) => this.setSortKey(e.target)} />
              </div>
              <br />
              <div>
                <label>rowRatios:</label>
                {this.props.rowRatios.map((rowHeight, i) => {
                  return <input type="number" placeholder={String(rowHeight)} value={String(rowHeight)} step="0.1" className="rowHeight" key={i} onChange={this.setRowFactors.bind(this)} style={{width: '3rem'}} />
                })}
                <button onClick={this.copy.bind(this)}>Copy</button>
              </div>
            </div>
        )

    }
}

export default SettingUI