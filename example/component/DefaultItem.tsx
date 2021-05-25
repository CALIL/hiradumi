import {Decimal} from 'decimal.js';
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
        const width = item.width
        const height = item.height
        return (
            <div className={'hiradumiBook' + (!this.props.item.cover ? ' nocover' : '')} id={item.id} style={{
                display: 'inline-block',
                width: width + 'px',
                height: height + 'px',
            }}>
                {this.props.item.cover ? (
                    <img src={item.cover}
                        alt={item.title}
                        data-aspect={item.properties.aspect}
                        ref="cover"
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                ) : (
                    <React.Fragment>
                        <div className="bg"></div>
                        <div className="textCover"></div>
                    </React.Fragment>
                )}
            </div>
        )
    }
}
