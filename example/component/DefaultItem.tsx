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
        if (this.props.item.cover){
            return <img src={item.cover}
                alt={item.title}
                data-aspect={item.properties.aspect}
            />
        } else {
            return (<div className="nocover">
                <div className="bg"></div>
                <div className="textCover"></div>
            </div>)
        }
    }
}
