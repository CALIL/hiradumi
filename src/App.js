import React, { Component } from 'react';
import Hiradumi from './Hiradumi';
import Book from './Book';
import items from './items.json';


export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div style={{width: '100%', margin: '0 auto'}}>
          <Hiradumi
                items={items}
                rowHeightList={[250,180,150,100,100,100,100]}
                view={Book}
                className={'items'}
                margin={10}
                maxRows={30}
              />
        </div>
      </div>
    );
  }
}
