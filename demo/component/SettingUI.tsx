import React, { Component } from 'react'

function execCopy(string: string){
  var tmp = document.createElement('div')
  var pre = document.createElement('pre')
  pre.style.webkitUserSelect = 'auto'
  pre.style.userSelect = 'auto'
  tmp.appendChild(pre).textContent = string
  var s = tmp.style
  s.position = 'fixed'
  s.right = '200%'
  document.body.appendChild(tmp)
  // @ts-ignore
  document.getSelection().selectAllChildren(tmp)
  var result = document.execCommand("copy")
  document.body.removeChild(tmp)
  return result
}

interface Props {
  itemHeight: number,
  width: number,
  padding: number,
  itemMargin: number,
  rowCount: number,
  rowRatios: number[] | null,
  sortKey: string | null
  onChange: (state: any) => void
}

interface State {

}

class SettingUI extends Component<Props, State> {
    constructor(props: Props) {
      super(props)
    }
    setRowHeight() {
        let rowHeightList: number[] = []
        Array.prototype.slice.call(document.querySelectorAll('.rowHeight')).forEach((rowHeight) => {
          if(rowHeight.value!=='') {
            rowHeightList.push(parseInt(rowHeight.value))
          } else {
            rowHeightList.push(parseInt(rowHeight.placeholder))
          }
        })
        this.props.onChange({rowHeightList: rowHeightList})
    }
    copy() {
        let rowHeightList: number[] = []
        Array.prototype.slice.call(document.querySelectorAll('.rowHeight')).forEach((rowHeight) => {
          if(rowHeight.value!=='') {
            rowHeightList.push(rowHeight.value)
          } else {
            rowHeightList.push(parseFloat(rowHeight.placeholder))
          }
        })
        execCopy(rowHeightList.toString())
    }
    setSortKey(sortKeyCheckBox: any) {
      if (sortKeyCheckBox.checked) {
        this.props.onChange({sortKey: 'term_popular_count'})
      } else {
        this.props.onChange({sortKey: null})
      }
    }
    setRowFactors() {
      const rowRatios: number[] = []
      Array.prototype.slice.call(document.querySelectorAll('input[type="number"]')).forEach((input) => {
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
                <label htmlFor="itemHeight">itemHeight:</label>
                <input type="range" id="itemHeight" name="width" min="10" max="600" value={this.props.itemHeight} onChange={(e) => this.props.onChange({itemHeight: parseInt(e.target.value)})} />
                {this.props.itemHeight}
                &nbsp;
                <label htmlFor="itemMargin">itemMargin:</label>
                <input type="range" id="itemMargin" name="width" min="0" max="50" value={this.props.itemMargin} onChange={(e) => this.props.onChange({itemMargin: parseInt(e.target.value)})} />
                {this.props.itemMargin}
                &nbsp;
                <label htmlFor="rowCount">rowCount:</label>
                <input type="range" id="rowCount" name="width" min="1" max="30" value={this.props.rowCount} onChange={(e) => this.props.onChange({rowCount: parseInt(e.target.value)})} />
                {this.props.rowCount}
                &nbsp;&nbsp;
                <label htmlFor="padding">padding:</label>
                <input type="range" id="padding" name="width" min="0" max="50" value={this.props.padding} onChange={(e) => this.props.onChange({padding: parseInt(e.target.value)})} />
                {this.props.padding}
                &nbsp;
                <label htmlFor="sortKey">sortKey:</label>
                <input type="checkbox" id="sortKey" name="sortKey" defaultChecked={true} onChange={(e) => this.setSortKey(e.target)} />
              </div>
              <br />
              <div>
                <label>rowRatios:</label>
                {this.props.rowRatios && this.props.rowRatios.map((rowHeight, i) => {
                  return <input type="number" placeholder={String(rowHeight)} value={String(rowHeight)} step="0.1" className="rowHeight" key={i} onChange={this.setRowFactors.bind(this)} style={{width: '3rem'}} />
                })}
                <button onClick={this.copy.bind(this)}>Copy</button>
              </div>
            </div>
        )

    }
}

export default SettingUI