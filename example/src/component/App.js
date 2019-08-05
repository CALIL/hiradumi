import React, { Component } from 'react';
import Hiradumi from '../../../src/component/Hiradumi';
import Book from '../../../src/component/Book';
import SettingUI from './SettingUI';
import items from '../../../src/items.json';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      rowHeightList: [250,180,150,100,100,100,100],
      width: 100,
      margin: 10,
      maxRow: 30,
    };
  }
  render() {
    if (!this.state.items) return null;
    // const isMobile = !(document.body.clientWidth>600 || this.state.width>40);
    return (
      <div>
        <SettingUI onChange={this.setState.bind(this)} {...this.state} />
        <div style={{width: this.state.width + '%', margin: '0 auto'}}>
          <Hiradumi
                items={this.state.items}
                rowHeightList={this.state.rowHeightList}
                view={Book}
                className={'items'}
                margin={this.state.margin}
                maxRows={this.state.maxRow}
              />
        </div>
      </div>
    );
  }
}
