import React, { Component } from 'react'
import Hiradumi from '../../src/Hiradumi'
import SettingUI from './SettingUI'
// import items from '../Kochi_Motoyama_plus.json'
import items from '../../Gifu_Nakatsugawa_plus.json'
import DefaultItem from './DefaultItem'


items.map((item) => {
  if (item.cover==='') {
    item.term_popular_count = 0
  }
})

Array.from({length: 10}).map(() => {
  ([].concat(items)).map((item) => {
    items.push(item)
  })
})

interface App {
  factors: number[]
  hiradumiDiv: any
  setHiradumi: (element: any) => void
}
interface Props {
}
interface State {
  items: any[]
  width: number
  height: number
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
      width: window.innerWidth,
      height: 0,
      margin: 10,
      rowCount: Infinity,
      sortKey: 'term_popular_count',
      rowFactors: null
    }
    this.hiradumiDiv = null

    this.setHiradumi = element => {
      this.hiradumiDiv = element
    }
  }
  componentDidMount() {
    if (document.body.clientWidth > 767) {
      this.setState({rowFactors: [1, 0.9, 0.8, 0.7]})
    } else {
      this.setState({rowFactors: [0.97, 0.75, 0.65, 0.55]})
    }

    this.setState({width: window.innerWidth, height: window.innerHeight - 92})
    window.addEventListener('resize', () => {
      this.setState({width: window.innerWidth, height: window.innerHeight - 92})
    })

  }

  onChange(state) {
    this.setState(state, () => {
      this.hiradumiDiv.setRowData()
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
              <div style={{width: this.state.width + 'px', margin: '0 auto'}}>
                <Hiradumi
                  ref={this.setHiradumi}
                  width={this.state.width}
                  height={this.state.height}
                  items={this.state.items}
                  size={this.state.size}
                  margin={this.state.margin}
                  rowCount={this.state.rowCount}
                  rowFactors={this.state.rowFactors}
                  itemComponent={DefaultItem}
                  className={'hiradumi'}
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