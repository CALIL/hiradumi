import React, {Component} from 'react';

export default class Book extends Component {
    constructor(props) {
        super(props);
    }
    onClick() {
        // let url = 'https://calil.jp/book/' + this.props.item.isbn;
        // if (this.props.statusText!=='蔵書なし' && this.props.item.apiResult && this.props.item.apiResult[this.props.systemids[0]]) {
        //     url = this.props.item.apiResult[this.props.systemids[0]].reserveurl;
        // }
        // window.open(url, '_parent');
        window.open('https://calil.jp/book/' + this.props.item.isbn, '_parent');
    }
    render() {
        const book = this.props.item;
        const fontSize = book.height / 14;
        return (
            <React.Fragment>
                <div className={'book' + (book.fullWidth ? ' stripe' : '')} ref="book" key={book.isbn} id={book.id} onClick={this.onClick.bind(this)}>
                    {this.props.item.cover ? (
                        <img src={book.cover} alt={book.title} ref="cover" />
                    ) : (
                        <React.Fragment>
                            <div className="bg"></div>
                            <div className="textCover">
                                <div className="title" style={{fontSize: fontSize+'px'}}>{book.title}</div>
                                {(book.row <= 3) ? (
                                    <div className="author">{book.author}</div>
                                ) : null}
                            </div>
                        </React.Fragment>
                    )}
                </div>
            </React.Fragment>
        );
    }
}
