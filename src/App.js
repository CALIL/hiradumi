import React, { Component } from 'react';
import AspectPanel from './AspectPanel';
import CalilAPI from './CalilAPI';
import Book from './Book';

function getQueryString() {
  var params = {}
  window.location.search.substr(1).split('&').map(function (param) {
    var pairs = param.split('=');
    params[pairs[0]] = decodeURIComponent(pairs[1]);
  });
  if (window.systemid) params.systemid = window.systemid;
  return params;
}

function execCopy(string){
  // 空div 生成
  var tmp = document.createElement("div");
  // 選択用のタグ生成
  var pre = document.createElement('pre');
  // 親要素のCSSで user-select: none だとコピーできないので書き換える
  pre.style.webkitUserSelect = 'auto';
  pre.style.userSelect = 'auto';
  tmp.appendChild(pre).textContent = string;

  // 要素を画面外へ
  var s = tmp.style;
  s.position = 'fixed';
  s.right = '200%';

  // body に追加
  document.body.appendChild(tmp);
  // 要素を選択
  document.getSelection().selectAllChildren(tmp);

  // クリップボードにコピー
  var result = document.execCommand("copy");
  // 要素削除
  document.body.removeChild(tmp);
  return result;
}

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
    const params = getQueryString();
    this.state = {
      books: null,
      systemid: params.systemid,
      width: 60,
      rowHeightList: [250,180,150,100,100,100,100],
      margin: 8,
      maxRow: 30,
    };
    fetch('https://storage.googleapis.com/pickup-books/'+this.state.systemid+'.json').then((r) => r.json()).then((data) => {
      let new_books = [];
      let count = 0;
      data.map((book) => {
        book.id = book.asin;
        book.isbn = book.asin;
        let img = document.createElement('img');
        if (book.cover && book.cover!=='') {
          img.src = book.cover;
          img.onload = () => {
            count += 1;
            book.size = [img.width, img.height];
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
  setRowHeight() {
    let rowHeightList = []
    Array.prototype.slice.call(document.querySelectorAll('.rowHeight')).map((rowHeight) => {
      if(rowHeight.value!=='') {
        rowHeightList.push(rowHeight.value);
      } else {
        rowHeightList.push(parseInt(rowHeight.placeholder));
      }
    });
    this.setState({rowHeightList: rowHeightList});
  }
  copy() {
    let rowHeightList = []
    Array.prototype.slice.call(document.querySelectorAll('.rowHeight')).map((rowHeight) => {
      if(rowHeight.value!=='') {
        rowHeightList.push(rowHeight.value);
      } else {
        rowHeightList.push(parseInt(rowHeight.placeholder));
      }
    });
    execCopy(rowHeightList.toString())
  }
  render() {
    if (!this.state.books) return null;
    console.log(this.state.margin)
    return (
      <div>
        <div style={{width: '1400px', margin: '0 auto', padding: '10px'}}>
        <div>
          <label htmlFor="width">横幅</label>
          <input type="range" id="width" name="width" min="1" max="10" onChange={(e) => this.setState({width: e.target.value * 10})} />
          {this.state.width}%
          &nbsp;
          <label htmlFor="margin">マージン</label>
          <input type="range" id="margin" name="width" min="1" max="30" onChange={(e) => this.setState({margin: parseInt(e.target.value)})} />
          {this.state.margin}
          &nbsp;
          <label htmlFor="margin">最大行数</label>
          <input type="range" id="maxRow" name="width" min="1" max="30" onChange={(e) => this.setState({maxRow: parseInt(e.target.value)})} />
          {this.state.maxRow}
        </div>
        <br />
        <div>
          <label>行の高さ</label>
          {this.state.rowHeightList.map((rowHeight, i) => {
            return <input type="number" placeholder={rowHeight} className="rowHeight" key={i} index={i} onChange={this.setRowHeight.bind(this)} />
          })}
          <button onClick={this.copy.bind(this)}>コピー</button>
        </div>
        </div>
        <div style={{width: this.state.width + '%', margin: '0 auto'}}>
        <CalilAPI 
          items={this.state.books}
          systemids={[this.state.systemid]}
          view={(props) => {
            return <AspectPanel
              items={props.items}
              rowHeightList={this.state.rowHeightList}
              rowHeightListMobile={this.state.rowHeightList}
              view={Book}
              className={'books'}
              margin={this.state.margin}
              maxRows={this.state.maxRow}
            />
          }}
        />
      </div>
      </div>
    );
  }
}

export default App;
