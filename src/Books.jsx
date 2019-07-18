import React, { Component } from 'react';
import {BookGroup} from './BooksAPI';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: props.books,
      viewBookIDs: []
    };
  }
  componentDidMount() {
    const getStyleSheetValue = (element, property) => {
      if (!element || !property) {
        return null;
      }
      var style = window.getComputedStyle(element);
      var value = style.getPropertyValue(property);
      return value;
    }

    const container = document.querySelector('.book');
    this.margin = 4;
    this.margin += parseInt(getStyleSheetValue(container, 'margin-left'));
    this.margin += parseInt(getStyleSheetValue(container, 'margin-right'));
    this.margin += parseInt(getStyleSheetValue(container, 'border-right-width'));
    this.margin += parseInt(getStyleSheetValue(container, 'border-left-width'));
    this.redraw();
    window.addEventListener('resize', this.redraw.bind(this))
  }
  redraw() {
    if (this.lastRedraw - (new Date()).getTime() <= 500); // 多重実行抑制
    this.lastRedraw = (new Date()).getTime();  
    this.setState({ books: this.props.books});
    const areaWidth = this.refs.books.clientWidth;

    const height = 200;

    let COEFFICIENTS = [0.8, 0.55, 0.7, 0.5, 0.6, 0.4, 0.6, 0.4, 0.6, 0.4, 0.6, 0.4];
    if (areaWidth < 600) {
      COEFFICIENTS = [0.7, 0.65, 0.55, 0.6, 0.5, 0.65, 0.4, 0.55, 0.45, 0.5, 0.4, 0.5];
    }
    const FONTSIZES = [1, 0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.7, 0.6, 0.7, 0.6];

    let books = this.state.books.concat([]);
    let row = 0;

    let coefficient = COEFFICIENTS[row - 1];
    let calculated_rows = [];
    while (books.length > 0) {
      let calculated_books = [];
      let widths = 0;
      row += 1;
      // if (row > 3) break;
      if (window.bookRowLimit && row > window.bookRowLimit) break;
      coefficient = COEFFICIENTS[row - 1];
      if (!coefficient) coefficient = row % 2 === 1 ? 0.4 : 0.5;
      books.concat([]).some((book) => {
        this.setBook(book, height, coefficient);
        widths += (book.width + this.margin);
        // 行の終わり
        if ((widths / areaWidth) > 1) {
          // 全体の余白のあまり分、本を大きくする
          let scale = areaWidth / (widths - (book.width + this.margin));
          if (calculated_books.length <= 5) scale = scale * (1 - calculated_books.length / 100);
          calculated_books.map((book) => {
            if (calculated_books.length === 1) {
              book.width = null;
              book.height = book.height * scale;
              book.stripe = true;
            } else {
              book.width = book.width * scale;
              book.height = book.height * scale;
            }
          });
          calculated_rows.push(calculated_books);
          return true;
        }
        book.row = row;
        book.fontSize = FONTSIZES[row - 1];
        if (!book.fontSize) book.fontSize = 0.6;
        calculated_books.push(book);
        books.shift();
      })
    }
    let new_books = [];
    calculated_rows.map((rowBooks) => {
      new_books = new_books.concat(rowBooks);
    });
    this.setState({ books: new_books });
    this.intersectionObserver();
  }
  setBook(book, height, coefficient) {
    book.author = book.author.split(' ')[0].split('／')[0];
    if (book.size) {
      book.height = height * coefficient;
      book.width = book.size[0] * height / book.size[1] * coefficient;
    } else {
      book.width = 200 * height / 300 * coefficient;
      book.height = 300 * height / 300 * coefficient;
    }
  }
  intersectionObserver() {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            // 表示内 idを追加
            if (this.state.viewBookIDs.indexOf(id) === -1) {
              this.state.viewBookIDs.push(id);
            }
          }
        });
        // console.log(this.state.viewBookIDs)
        this.setState({ viewBookIDs: this.state.viewBookIDs });
      },
        {
          root: null,
          rootMargin: '5px 0px 10px 0px',
          threshold: 1.0
        });
      [].slice.call(document.querySelectorAll('.book')).map((book) => {
        observer.observe(book);
      });
    }
  }
  render() {
            {/* this.state.books.map((book) => {
                return <Book book={book} key={book.id} view={this.state.viewBookIDs.indexOf(book.id) > -1}></Book>
            }) */}
      return (
        <div className="books" ref="books">
            {this.state.books ? (
              <BookGroup systemids={this.props.systemids} books={this.state.books} />
            ) : (
              <div className="book"></div>
            )}
        </div>
    );
  }
}

export default Books;
