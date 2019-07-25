import React, { Component } from 'react';
import Hiradumi from './Hiradumi';
import Book from './Book';
import SettingUI from './SettingUI';


/**
 * 最大公約数を求める
 */
function gcd(x, y){
  if(y === 0) return x
  return gcd(y, x % y)
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      rowHeightList: [250,180,150,100,100,100,100],
      width: 100,
      margin: 10,
      maxRow: 30,
    };
    // 元データから画像のアスペクト比を出してHiradumiに渡す
    fetch('https://storage.googleapis.com/pickup-books/Kyoto_Pref.json').then((r) => r.json()).then((data) => {
      let new_items = [];
      let count = 0;
      data.map((item) => {
        item.id = item.asin;
        item.isbn = item.asin;
        // 画像の先読み
        let img = document.createElement('img');
        if (item.cover && item.cover!=='') {
          img.src = item.cover;
          img.onload = () => {
            count += 1;

            // アスペクト比の算出
            const g = gcd(img.width, img.height);
            const ratioWidth = img.width / g;
            const ratioHeight = img.height / g;
            item.aspect = ratioWidth / ratioHeight;

            if (img.width === 1 && img.height === 1) {
              item.cover = null;
            }
            new_items.push(item);
            if (data.length===count) {
              this.setState({items: new_items});
            }
          }
        } else {
          count += 1;
        }
      });
    });
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

export default App;
