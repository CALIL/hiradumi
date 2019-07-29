import React, { Component } from 'react';

type Props = {
    items: Array<Item>,
    rowHeightList: Array<number>, // 各行の高さ
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
        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                const rect = entry.contentRect;
                if (this.lastRedraw - (new Date()).getTime() <= 100) { // 多重実行抑制
                    this.setState({width: parseInt(rect.width)})
                }
                this.lastRedraw = (new Date()).getTime();
            }
        });
        resizeObserver.observe(this.refs.items);
    }
    render() {
        let rows = [];
        let rowCount = 1;
        let itemIndex = 0;
        while (this.state.items.length-1 > itemIndex) {
            let rowHeight;
            rowHeight = this.props.rowHeightList[rowCount-1];
            if (!rowHeight) rowHeight = this.props.rowHeightList[this.props.rowHeightList.length-1];
            let rowItems = [];
            let x = 0;
            // 行数指定
            if (this.props.maxRows && rowCount > this.props.maxRows) break;
            this.state.items.slice(itemIndex).some((item) => {
                item.width = rowHeight * item.aspect;
                item.height = rowHeight;
                item.margin = this.props.margin;
                item.row = rowCount;
                x += item.width + this.props.margin;
                // 横幅を超えたら行の終わり
                if (this.state.width && x > this.state.width) {
                    // 全体の余白のあまり分、大きくする
                    x = x - (item.width + this.props.margin);
                    let scale = this.state.width / x;
                    rowItems.map((item) => {
                        if (rowItems.length === 1) {
                            item.width = this.state.width;
                            item.height = this.state.width / item.aspect;
                            item.fullWidth = true;
                        } else {
                            item.width = item.width * scale;
                            item.height = item.height * scale;
                            item.fullWidth = false;
                        }
                    });
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
            <div className={this.props.className} ref="items" style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}>
                {items.map((item) => {
                    return (
                        <div key={item.id} style={{width: item.width+'px', height: item.height+'px', margin: '0 ' + item.margin/2 + 'px ' + item.margin + 'px', transition: 'width 0.075s linear, height 0.075s linear', willChange: 'width, height'}}>
                            <View item={item} />
                        </div>
                    );
                })}
            </div>
        );
    }
}