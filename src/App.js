import React, { Component } from 'react';
import AspectPanel from './AspectPanel';
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
      books: null,
      rowHeightList: [250,180,150,100,100,100,100],
      width: 100,
      margin: 18,
      maxRow: 30,
    };
    fetch('https://storage.googleapis.com/pickup-books/Kyoto_Pref.json').then((r) => r.json()).then((data) => {
      let new_books = [];
      let count = 0;
      data.map((book) => {
        book.id = book.asin;
        book.isbn = book.asin;
        // 画像の先読み
        let img = document.createElement('img');
        if (book.cover && book.cover!=='') {
          img.src = book.cover;
          img.onload = () => {
            count += 1;
            book.size = [img.width, img.height];
            // アスペクト比の算出
            const g = gcd(img.width, img.height);
            const ratioWidth = img.width / g;
            const ratioHeight = img.height / g;
            book.aspect = ratioWidth / ratioHeight;

            new_books.push(book);
            if (book.size[0] === 1 && book.size[1] === 1) {
              book.cover = null;
            }
            if (data.length===count) {
              this.setState({books: new_books});
            }
          }
        } else {
          count += 1;
        }
      });
    });
  }
  render() {
    if (!this.state.books) return null;
    return (
      <div>
        <SettingUI onChange={this.setState.bind(this)} {...this.state} />
        <div style={{width: this.state.width + '%', margin: '0 auto'}}>
          <AspectPanel
                items={this.state.books}
                rowHeightList={document.body.clientWidth>600 || this.state.width>40 ? this.state.rowHeightList : [150,100,80,60,60,60,60]}
                view={Book}
                className={'books'}
                margin={this.state.margin}
                maxRows={this.state.maxRow}
              />
        </div>
      </div>
    );
  }
}

export default App;
