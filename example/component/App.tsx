import React, { Component } from 'react'
import Hiradumi from '../../src/Hiradumi'
import SettingUI from './SettingUI'
// import items from '../Kochi_Motoyama_plus.json'
// import items from '../../Gifu_Nakatsugawa_plus.json'
import DefaultItem from './DefaultItem'

function getQueryString() {
  var params = {}
  location.search.substr(1).split('&').map(function(param) {
      var pairs = param.split('=');
      params[pairs[0]] = decodeURIComponent(pairs[1]);
  });
  return params;    
}

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
  itemHeight: number
  margin: number
  rowCount: number
  sortKey: string | null
  rowRatios: number[] | null
}

class App extends Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      items: null,
      itemHeight: 200,
      width: 100,
      height: 0,
      margin: 10,
      // rowCount: 10,
      rowCount: Infinity,
      sortKey: 'term_popular_count',
      rowRatios: null
    }
    this.hiradumiDiv = null

    this.setHiradumi = element => {
      this.hiradumiDiv = element
    }
  }
  componentDidMount() {
    const params = getQueryString()
    const system_id = params.system_id ? params.system_id : 'Gifu_Nakatsugawa'
    fetch(`https://storage.googleapis.com/pickup-books/${system_id}.json`).then((r)=>r.json()).then((items) => {
      const newItems = []
      items.map((item) => {
        if (item.cover==='') {
          item.term_popular_count = 0
        }
        newItems.push(Object.assign({}, item))
      })

      // Array.from({length: 1000}).map(() => {
      //   ([].concat(items)).map((item) => {
      //     newItems.push(Object.assign({}, item))
      //   })
      // })

      this.setState({items: newItems})
    })

    if (document.body.clientWidth > 767) {
      this.setState({rowRatios: [1, 0.9, 0.8, 0.7]})
    } else {
      this.setState({rowRatios: [0.97, 0.75, 0.65, 0.55]})
    }

    const uiHeight = 92
    this.setState({width: document.body.clientWidth, height: window.innerHeight - uiHeight})
    console.log(document.body.clientWidth)
    // setTimeout(() => {
    //   console.log(document.body.clientWidth)
    //   this.setState({width: document.body.clientWidth})
    // }, 100)
    window.addEventListener('resize', () => {
      this.setState({width: document.body.clientWidth, height: window.innerHeight - uiHeight})
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
          {this.state.rowRatios ? (
            <React.Fragment>
              <SettingUI
                itemHeight={this.state.itemHeight}
                width={this.state.width}
                margin={this.state.margin}
                rowCount={this.state.rowCount}
                rowRatios={this.state.rowRatios}
                sortKey={this.state.sortKey}
                onChange={this.onChange.bind(this)}
              />
              <div style={{width: '100%', margin: '0 auto'}}>
                <Hiradumi
                  ref={this.setHiradumi}
                  width={this.state.width}
                  height={this.state.height}
                  items={this.state.items}
                  itemHeight={this.state.itemHeight}
                  margin={this.state.margin}
                  rowCount={this.state.rowCount}
                  rowRatios={this.state.rowRatios}
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