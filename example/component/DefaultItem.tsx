import React, {Component} from 'react'


interface Book {
    id: string
    title: string
    author: string
    isbn: string
    width: number
    height: number
    cover: string | null
    properties: {
        aspect: number
    }
}
interface Props {
    item: Book
    margin: number
    sortKey: string | null
}
interface State {
}

export default class Item extends Component<Props, State> {
    constructor(props) {
        super(props)
    }
    render() {
        const item = this.props.item
        const fontSize = (this.props.item.width - this.props.margin) / 14
        const sortKeySize = this.props.item.height / 7
        const width = item.width - this.props.margin
        const height = item.height - this.props.margin
        return (
            <div className={'hiradumiBook' + (!this.props.item.cover ? ' nocover' : '')} id={item.id} style={{
                display: 'inline-block',
                width: width + 'px',
                height: height + 'px',
                margin: this.props.margin / 2 + 'px',
            }}>
                <a href={'https://calil.jp/book/' + this.props.item.isbn} target="_blank" style={{
                    display: 'inline-block',
                    width: width + 'px',
                    height: height + 'px',
                    }}>
                {this.props.item.cover ? (
                    <React.Fragment>
                        <img src={item.cover}
                            alt={item.title}
                            data-aspect={item.properties.aspect}
                            ref="cover"
                            style={{
                                width: width + 'px',
                                height: height + 'px',
                            }}
                        />
                        {this.props.sortKey && height > 100 ? (
                            <span className="sortKey" style={{
                                opacity: item[this.props.sortKey] / 4 + 0.1,
                                fontSize: fontSize + 'px',
                                width: sortKeySize + 'px',
                                height: sortKeySize + 'px',
                                right: sortKeySize / 4,
                                bottom: sortKeySize / 4,
                            }}>{item[this.props.sortKey]}</span>
                        ) : null}
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <div className="bg"></div>
                        <div className="textCover">
                            {height > 100 ? (
                            <React.Fragment>
                                <div className="title" style={{fontSize: fontSize+'px'}}>{item.title}</div>
                                <div className="author" style={{fontSize: fontSize*0.7+'px'}}>{item.author}</div>
                            </React.Fragment>
                            ) : null}
                        </div>
                        {this.props.sortKey && height > 100 ? (
                            <span className="sortKey" style={{
                                opacity: item[this.props.sortKey] / 4 + 0.1,
                                fontSize: fontSize + 'px',
                                width: sortKeySize + 'px',
                                height: sortKeySize + 'px',
                                right: sortKeySize / 4,
                                bottom: sortKeySize / 4,
                            }}>{item[this.props.sortKey]}</span>
                        ) : null}
                    </React.Fragment>
                )}
                </a>
            </div>
        )
    }
}
