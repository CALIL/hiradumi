import React, { Component, ReactComponentElement } from 'react'
import Hiradumi from '../Hiradumi'
import SettingUI from './SettingUI'
// import items from '../Kochi_Motoyama_plus.json'
import items from '../../Gifu_Nakatsugawa_plus.json'

interface App {
  factors: number[]
  hiradumi: any
  setHiradumi: (element: any) => void
}
interface Props {
}
interface State {
  items: any[]
  width: number
  size: number
  margin: number
  rowCount: number
  sortKey: string | null
  rowFactors: number[] | null
}

class App extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      items: items,
      size: 200,
      width: 100,
      margin: 10,
      rowCount: 10,
      sortKey: 'term_popular_count',
      rowFactors: null
    }
    this.hiradumi = null

    this.setHiradumi = element => {
      this.hiradumi = element
    }
  }
  componentDidMount() {
    if (document.body.clientWidth > 767) {
      this.setState({rowFactors: [1, 0.9, 0.8, 0.7]})
    } else {
      this.setState({rowFactors: [0.97, 0.75, 0.65, 0.55]})
    }
  }

  onChange(state) {
    this.setState(state, () => {
      this.hiradumi.setRowData()
    })
  }

  render() {
    
    if (!this.state.items) return null

    return (
      <div>
          {this.state.rowFactors ? (
            <React.Fragment>
              <SettingUI
                size={this.state.size}
                width={this.state.width}
                margin={this.state.margin}
                rowCount={this.state.rowCount}
                rowFactors={this.state.rowFactors}
                sortKey={this.state.sortKey}
                onChange={this.onChange.bind(this)}
              />
              <div style={{width: this.state.width + '%', margin: '0 auto'}}>
                <Hiradumi
                  ref={this.setHiradumi}
                  items={this.state.items}
                  size={this.state.size}
                  margin={this.state.margin}
                  rowCount={this.state.rowCount}
                  rowFactors={this.state.rowFactors}
                  itemComponent={null}
                  sortKey={this.state.sortKey}
                />
              </div>
            </React.Fragment>
          ) : null}
      </div>
    )
  }
}

export default App