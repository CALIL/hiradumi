import 'whatwg-fetch'
import React, { Component } from 'react'
import Hiradumi from '../../src/Hiradumi'
import SettingUI from './SettingUI'
import DefaultItem from './DefaultItem'

interface App {
  factors: number[]
  settingUI: any
}
interface Props {
  items: any[]
}
interface State {
  items: any[]
  width: number
  height: number
  padding: number
  itemHeight: number
  itemMargin: number
  rowCount: number
  sortKey: string | null
  rowRatios: number[] | null
  scrollTo: {
    key: string
    value: any
  } | null
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      items: props.items,
      itemHeight: 200,
      width: 100,
      height: 0,
      padding: 10,
      itemMargin: 10,
      rowCount: Infinity,
      sortKey: 'term_popular_count',
      rowRatios: null,
      scrollTo: null,
    }
  }
  componentDidMount() {

    if (document.body.clientWidth > 767) {
      this.setState({rowRatios: [1, 0.9, 0.8, 0.7]})
    } else {
      this.setState({rowRatios: [0.97, 0.75, 0.65, 0.55]})
    }

    this.setState({width: window.innerWidth, height: window.innerHeight})
    const timer = setInterval(() => {
      if (this.settingUI) {
        this.setState({width: window.innerWidth, height: window.innerHeight - this.settingUI.clientHeight})
        clearInterval(timer)
      }
    }, 100)
    window.addEventListener('resize', () => {
      this.setState({width: window.innerWidth, height: window.innerHeight - this.settingUI.clientHeight})
    })

    if(location.hash) {
      const isbn = location.hash.substr(1)
      this.setState({scrollTo: {
        key: 'isbn', value: isbn
      }})
    }
  } 

  onChange(state: State) {
    this.setState(state)
  }

  render() {
    
    if (!this.state.items) return null


    return (
      <div>
          {this.state.rowRatios ? (
            <React.Fragment>
              <div ref={(element) => this.settingUI = element}>
                <SettingUI
                  itemHeight={this.state.itemHeight}
                  width={this.state.width}
                  padding={this.state.padding}
                  itemMargin={this.state.itemMargin}
                  rowCount={this.state.rowCount}
                  rowRatios={this.state.rowRatios}
                  sortKey={this.state.sortKey}
                  onChange={this.onChange.bind(this)}
                />
              </div>
              <div style={{width: '100%', margin: '0 auto'}}>
                <Hiradumi
                  width={this.state.width}
                  height={this.state.height}
                  items={this.state.items}
                  padding={this.state.padding}
                  itemHeight={this.state.itemHeight}
                  itemMargin={this.state.itemMargin}
                  rowCount={this.state.rowCount}
                  rowRatios={this.state.rowRatios}
                  itemComponent={DefaultItem}
                  className={'hiradumi'}
                  sortKey={this.state.sortKey}
                  onScroll={(e) => {}}
                  headerComponent={Header}
                  headerHeight={50}
                  footerComponent={Footer}
                  footerHeight={50}
                  style={{
                    // backgroundColor: 'red' 
                  }}
                  // @ts-ignore
                  scrollTo={this.state.scrollTo}
                />
              </div>
            </React.Fragment>
          ) : null}
      </div>
    )
  }
}

const Header = () => {
  return (
    <header>header</header>
  )
}
const Footer = () => {
  return (
    <footer>footer</footer>
  )
}

export default App