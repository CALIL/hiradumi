import React from 'react'
import { VariableSizeList as List } from "react-window";

import DefaultItem from './DefaultItem'

function getScrollbarWidth() {
    const outer = document.createElement('div')
    outer.style.visibility = 'hidden'
    outer.style.overflow = 'scroll'
    document.body.appendChild(outer)
  
    const inner = document.createElement('div')
    outer.appendChild(inner)
  
    const scrollBarWidth = (outer.offsetWidth - inner.offsetWidth)
 
    outer.parentNode.removeChild(outer)
    return scrollBarWidth
}

interface Props {
    items: any[]
    width: number
    height: number
    padding: number
    itemHeight: number
    itemMargin: number
    rowCount: number
    rowRatios: number[]
    itemComponent: any
    className: string
    sortKey: string | null
    onScroll: (event:any) => void
    footerComponent: any
    footerHeight: number
    style: any
    scrollTo: {
        key: string,
        value: any,
        behavior: string
    }
}
interface State {
    items: any[]
    rows: any[]
    rowHeights: number[]
}

interface Hiradumi {
    hiradumi: any
    Row: any
    rowCount: number
    factors: number[]
}

class Hiradumi extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            items: props.items.map( item => ({...item})),
            rows: [],
            rowHeights: []
        }
        this.hiradumi = null
    }

    componentDidMount() {
        this.setRowData()
        if (this.props.scrollTo) {
            console.log(this.props.scrollTo)
            const {key, value} = this.props.scrollTo
            setTimeout(() => {
                this.scrollTo(key, value)
            }, 100)
        }
    }

    shouldComponentUpdate() {
        this.state.items = this.props.items.map( item => ({...item}))
        this.setRowData()
        return true
    }

    scrollTo(key, value) {
        let index
        this.state.rows.map((items, i) => {
            if (typeof items.type==='undefined' && items.filter((item)=> item[key] === value).length > 0) {
                index = i
            }
        })
        let height = this.props.padding
        this.state.rowHeights.some((rowHeight, i) => {
            if (i===index) return true
            height += rowHeight
        })
        let count = 0
        const timer = setInterval(() => {
            if (this.hiradumi.firstElementChild.scrollTop >= height - 100 || count > 10) {
                return clearTimeout(timer)
            }
            console.log(this.hiradumi.firstElementChild.scrollTop)
            this.hiradumi.firstElementChild.scrollTo(0, height)
            count += 1
        }, 10)
    }

    // 行の幅の範囲内にアイテムを入れる
    putItem(currentItems, rowWidth, rowRatio) {
        const items = []
        let rowTotalWidth = 0
        
        const height = this.props.itemHeight * rowRatio
        currentItems.some((item) => {
            const hasAspect = item.properties && item.properties.aspect
            const aspect: number = hasAspect ? item.properties.aspect : 0.666666
            const width = Math.floor(height * aspect) + this.props.itemMargin
            // 行よりも大きくなるなら終了
            if (rowTotalWidth + width > rowWidth) return true
            item.height = height
            item.width = width
            items.push(item)
            rowTotalWidth += width
        })
        return items
    }


    // 前の行をrowTotalWidth分詰めて、今の行を押し込む
    pushPreviousRow(items, prevItems, rowTotalWidth) {
        const prevRowTotalWidth = prevItems.reduce((size, item) => size + item.width, 0)
        const scaleDownRatio = prevRowTotalWidth / (prevRowTotalWidth + rowTotalWidth)
        prevItems.some((item) => {
            item.width = Math.floor(item.width * scaleDownRatio)
            item.height = Math.floor(item.height * scaleDownRatio)
        })
        // 今の行のサイズを調整
        const scaleRatio = prevItems[0].height / items[0].height
        items.some((item) => {
            item.width = Math.floor(item.width * scaleRatio)
            item.height = Math.floor(item.height * scaleRatio)
        })
        return prevItems.concat(items)
    }

    // sortKeyでソートして、中央から並べ直す
    sortCenter(items) {
        const sortLabel = this.props.sortKey
        items.sort(function (a, b) {
            if (a[sortLabel] < b[sortLabel]) return 1
            if (a[sortLabel] > b[sortLabel]) return -1
            return 0
        })
        const newRowData = {}
        const centerIndex = Math.floor(items.length / 2)
        newRowData[centerIndex] = items[0]
        Array.from({ length: centerIndex }).map((item, index) => {
            if (items[index * 2 + 1]) newRowData[centerIndex - 1 - index] = items[index * 2 + 1]
            if (items[index * 2 + 2]) newRowData[centerIndex + 1 + index] = items[index * 2 + 2]
        })
        return Object.values(newRowData)
    }

    setRowData() {
        this.state.rowHeights = []
        let rows = []
        let prevRowItems = []

        // 計算しているitemのindex
        let itemIndex = 0
        let items = this.state.items.slice(itemIndex, itemIndex+100)
        const rowMaxWidth = this.props.width - this.props.padding * 2 - getScrollbarWidth()

        for (let i = 0; items.length > 0 && rows.length < this.props.rowCount; i++) {
            const rowRatioIndex = i % this.props.rowRatios.length
            const rowRatio = this.props.rowRatios[rowRatioIndex]

            // 行の幅の範囲内にアイテムを入れる
            let rowItems = this.putItem(items, rowMaxWidth, rowRatio)

            const rowWidth = rowItems.reduce((size, item) => size + item.width, 0)

            // 残りの横幅分、サイズを調整
            const scaleUpRatio = rowMaxWidth / rowWidth

            // 縦が大きすぎないように規制 && 最後の行が1冊以上の場合
            if (scaleUpRatio < 2 && rowItems.length > 1) {
                rowItems.some((item) => {
                    item.width = Math.floor(item.width * scaleUpRatio)
                    item.height = Math.floor(item.height * scaleUpRatio)
                })
            } else {
                if (prevRowItems.length > 0) {
                    // 前の行をrowTotalWidth分詰めて、今の行を押し込む
                    rowItems = this.pushPreviousRow(rowItems, prevRowItems, rowWidth)
                    rows.pop()
                    this.state.rowHeights.pop()
                }
            }

            // sortKeyでソートして、中央から並べ直す
            if (this.props.sortKey) rowItems = this.sortCenter(rowItems)

            rows.push(rowItems)
            prevRowItems = rowItems
            
            // 行の高さを割り出してセット
            let heights = []
            rowItems.map((item) => {
                heights.push(item.height + this.props.itemMargin)
            })
            this.state.rowHeights.push(Math.max(...heights))
    
            itemIndex += rowItems.length
            items = this.state.items.slice(itemIndex, itemIndex+100)

        }

        if (this.props.footerComponent) {
            rows.push({type: 'footer', component: this.props.footerComponent})
            this.state.rowHeights.push(this.props.footerHeight)
        }

        this.state.rows = rows
    }

    onScroll(event: any) {
        if (!this.hiradumi) return
        const scrollArea = this.hiradumi.firstElementChild
        event.scrollTop = scrollArea.scrollTop
        event.scrollBottom = scrollArea.scrollHeight - scrollArea.clientHeight - scrollArea.scrollTop
        this.props.onScroll(event)
    }

    render() {
        return (<div className={this.props.className ? this.props.className : 'hiradumi'}
            ref={(element) => this.hiradumi = element}
        >
            <List
                width={this.props.width}
                height={this.props.height}
                itemCount={this.state.rows.length}
                itemSize={(index) => this.state.rowHeights[index]}
                onScroll={this.onScroll.bind(this)}
                style={this.props.style}
            >
                {({ index, style }) => {
                    const row = this.state.rows[index]
                    return this.renderRow(row, style)
                }}
            </List>
        </div>)
    }

    renderRow(row, style) {
        const rowStyle = JSON.parse(JSON.stringify(style))
        rowStyle.display = 'flex'
        rowStyle.justifyContent = 'space-between'

        if (typeof row.type==='undefined') {
            // paddingを反映
            rowStyle.top = parseInt(style.top) + this.props.padding + 'px'
            rowStyle.left = this.props.padding + 'px'
            rowStyle.width = `calc(100% - ${this.props.padding * 2}px)`
            rowStyle.boxSizing = 'border-box'
            return (
                <div className="row" style={rowStyle}>
                    {row.map((item) => {
                        return (<div className="item" id={item.id} style={{
                            display: 'inline-block',
                            width: item.width + 'px',
                            height: item.height + 'px',
                            margin: this.props.itemMargin / 2 + 'px'
                        }}>
                        {(() => {
                            if (this.props.itemComponent) {
                                return <this.props.itemComponent item={item} margin={this.props.itemMargin} sortKey={this.props.sortKey} />
                            } else {
                                return <DefaultItem item={item} margin={this.props.itemMargin} sortKey={this.props.sortKey} />
                            }
                        })()}
                        </div>)
                    })}
                </div>
            )
        } else {
            if (row.type==='footer') {
                rowStyle.top = parseInt(style.top) + this.props.padding + 'px'
                rowStyle.marginTop = this.props.itemMargin / 2
                return (
                    <div className="row" style={rowStyle}>
                        <row.component />
                    </div>
                )
            }
        }
    }

}
  
export default Hiradumi





