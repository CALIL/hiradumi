import React, { Component } from 'react';
import Hiradumi from '../Hiradumi.jsx';
import SettingUI from './SettingUI';
import Book from './Book.tsx';
// import items from '../Kochi_Motoyama_plus.json';
import items from '../Gifu_Nakatsugawa_plus.json';

interface App {
  factors: number[]
}
interface Props {
}
interface State {
  items: any[]
  width: number
  size: number
  margin: number
  rowCount: number
  rowFactors: number[]
}

class App extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      size: 200,
      width: 100,
      margin: 10,
      rowCount: 30,
      rowFactors: null
    }
  }
  componentDidMount() {
    console.log(document.body.clientWidth)
    if (document.body.clientWidth > 767) {
      this.setState({rowFactors: [1, 0.9, 0.8, 0.7]})
    } else {
      this.setState({rowFactors: [0.97, 0.75, 0.65, 0.55]})
    }
  }

  render() {
    
    if (!this.state.items) return null;

    return (
      <div>
        {/* <SettingUI onChange={this.setState.bind(this)} {...this.state} /> */}
        <div style={{width: this.state.width + '%', margin: '0 auto'}}>
          {this.state.rowFactors ? (
            <Hiradumi
              data={this.state.items}
              size={this.state.size}
              margin={this.state.margin}
              rowCount={this.state.rowCount}
              rowFactors={this.state.rowFactors}
              itemComponent={Book}
            />      
          ) : null}
        </div>
      </div>
    );
  }
}

export default App