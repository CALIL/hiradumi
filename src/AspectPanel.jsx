import React, { Component } from 'react';

type Props = {
    items: Array<Item>,
    rowHeightList: Array<number>, // 各行の高さ
    rowHeightListMobile: Array<number>, // 各行の高さ
    view: Function,
    margin: number,
    className: string,
    maxRows: ?number, // 最大行数
}

type Item = {
    aspect: float, // アスペクト比 横/縦
    width: number,
    height: number,
    row: number,
    fullWidth: boolean,
}

type State = {
    items: Array<Item>,
    width: ?number
}

export default class AspectPanel extends Component<Props, State> {
    static defaultProps = {
        maxRows: null,
        className: 'items',
    }
    constructor(props) {
      super(props);
      this.state = {
        items: props.items,
        width: null,
      };
    }
    componentDidMount() {
        this.setState({width: this.refs.items.clientWidth});
        window.addEventListener('resize', () => this.setState({width: this.refs.items.clientWidth}));
    }
    render() {
        let rows = [];
        let rowCount = 1;
        let itemIndex = 0;
        while (this.state.items.length-1 > itemIndex) {
            let rowHeight;
            if (this.state.width && this.state.width < 600) {
                rowHeight = this.props.rowHeightListMobile[rowCount-1];
            } else {
                rowHeight = this.props.rowHeightList[rowCount-1];
            }
            let rowItems = [];
            let x = 0;
            // 行数指定
            if (this.props.maxRows && rowCount > this.props.maxRows) break;
            console.log(this.state.width)
            this.state.items.slice(itemIndex).some((item) => {
                item.width = parseInt(rowHeight * item.aspect);
                item.height = rowHeight;
                item.margin = this.props.margin;
                x += item.width + this.props.margin;
                // 横幅を超えたら行の終わり
                if (x > this.state.width) {
                    // 全体の余白のあまり分、大きくする
                    x = x - item.width - this.props.margin;
                    let scale = this.state.width / x;
                    let width = 0;
                    rowItems.map((item) => {
                        if (rowItems.length === 1) {
                            item.width = this.state.width;
                            item.height = rowHeight;
                            item.fullWidth = true;
                        } else {
                            item.width = item.width * scale;
                            width += item.width;
                            item.height = item.height * scale;
                            item.fullWidth = false;
                        }
                    });
                    console.log(width+this.props.margin*rowItems.length)
                    rows.push(rowItems);
                    rowCount += 1;
                    return true;
                }
                rowItems.push(item);
                itemIndex += 1;
            });
        }
        let items = [];
        rows.map((rowItems) => {
            items = items.concat(rowItems);
        });
        const View = this.props.view;
        return (
            <div className={this.props.className} ref="items">
                {items.map((item) => {
                    return <View item={item} key={item.id} />
                })}
            </div>
        );
    }
}