import React, {Component} from 'react';

export default class item extends Component {
    constructor(props) {
        super(props);
    }
    onClick() {
        window.open('https://calil.jp/book/' + this.props.item.isbn, '_parent');
    }
    render() {
        const item = this.props.item;
        const fontSize = item.height / 14;
        return (
            <React.Fragment>
                <div className={'item' + (item.fullWidth ? ' stripe' : '')} ref="item" key={item.isbn} id={item.id} onClick={this.onClick.bind(this)}>
                    {this.props.item.cover ? (
                        <img src={item.cover} alt={item.title} ref="cover" />
                    ) : (
                        <React.Fragment>
                            <div className="bg"></div>
                            <div className="textCover">
                                <div className="title" style={{fontSize: fontSize+'px'}}>{item.title}</div>
                                {(item.row <= 3) ? (
                                    <div className="author">{item.author}</div>
                                ) : null}
                            </div>
                        </React.Fragment>
                    )}
                </div>
            </React.Fragment>
        );
    }
}
