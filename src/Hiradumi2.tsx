import React from 'react';
import ReactDOM from 'react-dom';

import 'whatwg-fetch';

import {List} from 'react-virtualized';


const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

class BookWalk extends React.Component {
    constructor(props) {
      super(props);
      const sizeLabel = 'hiradumi';
      const size = this.getSize(sizeLabel);
      this.currentCount = 1;
      this.state = {
          size: size,
          sizeLabel: sizeLabel,
          sort: 'random',
          data: [],
          menuOpen: false,
      };

      this.hiradumiRowCount = 200000;
      this.hiradumiFactors = [];
      Array.from({length: 4}).map((notValue, index) => {
          this.hiradumiFactors.push(this.getHiradumiFactor(index));
      });
      this.initHiradumi();
  }

    componentDidMount() {
        this.fetch();
        window.addEventListener('resize', this.resize.bind(this));
    }
    
    fetch() {
        // console.log('fetch')
        let sort = this.state.sort==='random' ? 'isbn' : this.state.sort;
        const url = 'https://nxc.calil.dev/bibs/' + sort + '.json'
        fetch(url).then((r) => r.json()).then((data) => {
            if (this.state.sort==='random') data = shuffle(data);
            this.setState({data: data});
        });
    }

    resize() {
        // console.log('resize')
        this.initHiradumi();
        this.forceUpdate();
    }

    // 各行のrender
    rowRenderer({key, index, isScrolling, isVisible, style}) {
        // console.log('rowRenderer')

        // 書影の高さ・幅 一行に入る数の計算
        let height = this.state.size;
        let width = height / 1.5;
        let columnCount = Math.floor(window.innerWidth / width) - 1;

        // 書影APIのサイズ
        let size = window.devicePixelRatio === 1 ? '200' : '400';
        if (isScrolling || columnCount >= 20) size = '120';

        let items = [];
        let i;
        Array.from({length: columnCount}).map((notValue, columnIndex) => {
            i = (index * columnCount) + columnIndex;
            if (i < this.state.data.length) {
                const imageUrl = 'https://nxc.calil.dev/' + size + '/' + this.state.data[i] + '.jpg';
                items.push(
                    <a key={key+this.state.data[i]} href={'https://calil.jp/book/' + this.state.data[i]} target="_blank">
                        <img src={imageUrl} style={{
                            'width':  width + 'px',
                            'height': height + 'px',
                        }} />
                    </a>
                );
            }
        });

        // 現在の冊数の更新
        this.currentCount = i;
        if (this.currentCount > this.state.data.length - 100) this.currentCount = this.state.data.length;

        return (
            <div key={key} style={style} className="row">{items}</div>
        );
    }

   // Hiradumi の 縦サイズの係数
   getHiradumiFactor(i) {
        // console.log('getHiradumiFactor')
        const index = i % 4; // 0 1 2 3
        let hiradumiFactor;
        if (index===0) hiradumiFactor = 1;
        if (index===1) hiradumiFactor = 0.9;
        if (index===2) hiradumiFactor = 0.8;
        if (index===3) hiradumiFactor = 0.7;
        if (window.innerWidth <= 767) {
            if (index===0) hiradumiFactor = 0.97;
            if (index===1) hiradumiFactor = 0.75;
            if (index===2) hiradumiFactor = 0.65;
            if (index===3) hiradumiFactor = 0.55;
        }
        return hiradumiFactor;
    }

    initHiradumi() {
        this.setHiradumiRowHeight();
        this.setHiradumiRowParams();
    }

    setHiradumiRowHeight() {
        this.hiradumiRowHeight = 0;
        this.hiradumiFactors.map((factor) => {
          let height = this.getSize('hiradumi') * factor;
          this.hiradumiRowHeight += height;
        });
    }

    setHiradumiRowParams() {
        this.hiradumiColumnCount = 0;
        this.hiradumiRowParams = [];
        Array.from({length: 4}).map((notValue, index) => {
            // 書影の高さ・幅 一行に入る数の計算
            let height = this.state.size * this.hiradumiFactors[index];
            let width = height / 1.5;
            let columnCount = Math.floor(window.innerWidth / width) - 1;

            this.hiradumiColumnCount += columnCount;
            this.hiradumiRowParams.push({
                columnCount: columnCount,
                width: width,
                height: height
            });
        });
    }


    // 各行のrender
    hiradumiRowRenderer({key, index, isScrolling, isVisible, style}) {
        return (
            <div key={key} style={style} className="row">
                <Hiradumi
                 data={this.state.data}
                 size={this.state.size}
                 rowIndex={index}
                 isScrolling={isScrolling}
                 hiradumiFactors={this.hiradumiFactors}
                 hiradumiColumnCount={this.hiradumiColumnCount}
                 hiradumiRowParams={this.hiradumiRowParams}
                 onRender={(i) => {
                    // 現在の冊数の更新
                    this.currentCount = i - this.hiradumiColumnCount;
                    if (this.currentCount > this.state.data.length - 100) this.currentCount = this.state.data.length;
                }} />
            </div>
        );
    }

    // 書影の高さの基準を返す
    getSize(sizeLabel) {
        // console.log('getSize')
        let size;
        if (sizeLabel==='hiradumi') size = 200;
        if (sizeLabel==='large') size = 150;
        if (sizeLabel==='medium') size = 100;
        if (sizeLabel==='small') size = 75;
        if (window.innerWidth <= 767) {
            if (sizeLabel === 'hiradumi') size = window.innerWidth * 0.38;
            if (sizeLabel === 'large') size = window.innerWidth * 0.28;
            if (sizeLabel === 'medium') size = window.innerWidth * 0.18;
            if (sizeLabel === 'small') size = window.innerWidth * 0.12;
        }
        return size;
    }

    // コントロールUIでサイズが変更されたときに呼ばれる関数
    setSize(sizeLabel) {
        // console.log('setSize')
        const size = this.getSize(sizeLabel);
        this.setState({
            size: size,
            sizeLabel: sizeLabel,
        });
    }

    // コントロールUIで並び順が変更されたときに呼ばれる関数
    setSort(sort) {
        // console.log('setSort')
        this.setState({'sort':sort}, this.fetch);
    }


    render() {
        // console.log('render')
        // ヘッダーとコントロールUIぶんの高さを表示領域からひく
        let headerHeight = document.querySelector('header') ? document.querySelector('header').clientHeight : 0;
        if (window.innerWidth <= 767 && (this.state.sizeLabel === 'small' || this.state.sizeLabel === 'medium')) {
            headerHeight += document.querySelector('nav') ? document.querySelector('nav').clientHeight : 0;
        }

        //　表示領域の幅と高さを求める
        let width = window.innerWidth - 20;
        if (window.innerWidth <= 767) width = window.innerWidth * 0.96;
        let height = window.innerHeight - 43 - document.querySelector('.covidHeader').clientHeight - headerHeight;

        // 行数を求める
        let rowCount;
        if (this.state.sizeLabel === 'hiradumi') {
            rowCount = Math.ceil(this.state.data.length / this.hiradumiColumnCount);
        } else {
            const columnCount = Math.floor(window.innerWidth / Math.floor(this.getSize(this.state.sizeLabel) / 1.5)) - 1;
            rowCount = Math.floor(this.state.data.length / columnCount);
        }
        return (
            <div>
                {this.state.data.length > 0 ? (
                    <React.Fragment>
                        <List
                            className="items"
                            width={width}
                            height={height}
                            rowCount={rowCount}
                            rowHeight={this.state.sizeLabel === 'hiradumi' ? this.hiradumiRowHeight : this.state.size}
                            rowRenderer={this.state.sizeLabel === 'hiradumi' ? this.hiradumiRowRenderer.bind(this) : this.rowRenderer.bind(this)}
                            overscanRowCount={2}
                            onScroll={() => {
                                if (this.timer) clearTimeout(this.timer);
                                this.timer = setTimeout(() => this.setState({}), 50);
                            }}
                        />
                        <nav>
                            <div className="itemCount">
                                <img src="./assets/icon-book.svg" alt="" />
                                <span className="currentCount">{this.currentCount}</span>/<span className="totalCount">{this.state.data.length}冊</span>
                                <div onClick={() => this.setState({menuOpen: !this.state.menuOpen})}>
                                    {this.state.menuOpen ? (
                                        <img className="close" src="./assets/times.svg" />
                                    ) : (
                                        <img className="open" src="./assets/hamburger.svg" />
                                    )}
                                </div>
                            </div>
                            <div className={'control' + (this.state.menuOpen ? ' open' : '')}>
                                <div className="sort">
                                    <button className={'random' + (this.state.sort==='random' ? ' select' : '')} onClick={this.setSort.bind(this, 'random')}>ランダム</button>
                                    <button className={'library' + (this.state.sort==='library' ? ' select' : '')} onClick={this.setSort.bind(this, 'library')}>図書館が所蔵</button>
                                    <button className={'yomitai' + (this.state.sort==='yomitai' ? ' select' : '')} onClick={this.setSort.bind(this, 'yomitai')}>みんなが読みたい</button>
                                    <button className={'isbn' + (this.state.sort==='isbn' ? ' select' : '')} onClick={this.setSort.bind(this, 'isbn')}>出版社</button>
                                </div>
                                <div className="size">
                                    <button className={'small' + (this.state.sizeLabel==='small' ? ' select' : '')} onClick={this.setSize.bind(this, 'small')}>S</button>
                                    <button className={'medium' + (this.state.sizeLabel==='medium' ? ' select' : '')} onClick={this.setSize.bind(this, 'medium')}>M</button>
                                    <button className={'large' + (this.state.sizeLabel==='large' ? ' select' : '')} onClick={this.setSize.bind(this, 'large')}>L</button>
                                    <button className={'hiradumi' + (this.state.sizeLabel==='hiradumi' ? ' select' : '')} onClick={this.setSize.bind(this, 'hiradumi')}>H</button>
                                </div>
                            </div>
                        </nav>
                    </React.Fragment>
                ) : (
                    <div className="message">Now Loading...</div>
                )}
            </div>
        );
    }
}

export default BookWalk

class Hiradumi extends React.Component {
    constructor(props) {
      super(props);
      this.lastCount = 0;
      this.size = window.devicePixelRatio === 1 ? '200' : '400';
    }

 
    rowRender(rowIndex) {
        // console.log('rowRender')
        let {height, width, columnCount} = this.props.hiradumiRowParams[rowIndex];

        // 書影APIのサイズ
        let size = this.size;
        if (this.props.isScrolling || columnCount >= 20) size = '120';

        let items = [];
        let i;
        Array.from({length: columnCount}).map((notValue, columnIndex) => {
            i =  (this.props.hiradumiColumnCount * this.props.rowIndex) + this.totalCount + columnIndex;
            if (i < this.props.data.length) {
                const imageUrl = 'https://nxc.calil.dev/' + size + '/' + this.props.data[i] + '.jpg';
                items.push(
                    <a key={this.props.data[i]} href={'https://calil.jp/book/' + this.props.data[i]} target="_blank" style={{
                        'width':  width + 'px',
                        'height': height + 'px',
                    }}>
                        <img src={imageUrl} style={{
                            'width':  width * 0.96 + 'px',
                            'height': height * 0.96 + 'px',
                        }} />
                    </a>
                );
            }
        });

        this.totalCount += columnCount;
        this.lastCount = i;
        return <div key={'hiradumiRow'+i}>{items}</div>;

    }

    render() {
        this.totalCount = 0;
        let rows = [];
        Array.from({length: this.props.hiradumiRowParams.length}).map((notValue, index) => {
            let items = this.rowRender(index);
            rows.push(items);
        });
        this.props.onRender(this.lastCount);
        return rows;
    }
}

