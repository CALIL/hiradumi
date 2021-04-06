import React, { Component } from 'react';
import Hiradumi from '../Hiradumi.jsx';
import SettingUI from './SettingUI';
import Book from './Book.tsx';
// import items from '../Kochi_Motoyama_plus.json';
import items from '../Gifu_Nakatsugawa_plus.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      width: 100,
      margin: 10,
      rowCount: 30,
    };
  }

  render() {
    if (!this.state.items) return null;
    // const isMobile = !(document.body.clientWidth>600 || this.state.width>40);
    return (
      <div>
        {/* <SettingUI onChange={this.setState.bind(this)} {...this.state} /> */}
        <div style={{width: this.state.width + '%', margin: '0 auto'}}>
          <Hiradumi
                data={this.state.items}
                margin={this.state.margin}
                rowCount={this.state.rowCount}
                itemComponent={Book}
              />
        </div>
      </div>
    );
  }
}
