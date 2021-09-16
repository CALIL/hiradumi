import React from 'react'
// @ts-ignore
import { VariableSizeList as List } from 'react-window'

import DefaultItem from './DefaultItem'


// 配列をn個毎の配列に分割して返す関数
const splitByNumber = (sourceArray: any[], splitNumber: number) => {
    const result = []
    for (let i = 0; i < sourceArray.length; i += splitNumber) {
        const subArray = sourceArray.slice(i, i + splitNumber)
        result.push(subArray)
    }
    return result
}

function getScrollbarWidth() {
    const outer = document.createElement('div')
    outer.style.visibility = 'hidden'
    outer.style.overflow = 'scroll'
    document.body.appendChild(outer)
  
    const inner = document.createElement('div')
    outer.appendChild(inner)
  
    const scrollBarWidth = (outer.offsetWidth - inner.offsetWidth)
 
    if (outer.parentNode) outer.parentNode.removeChild(outer)
    return scrollBarWidth
}

interface Props {
    width: number
    height: number
    padding: number
    className: string

    items: any[]
    itemHeight: number
    itemMargin: number
    itemComponent: any

    rowCount: number
    rowRatios: number[]

    sortKey: string | null
    onScroll: (event:any) => void
    scrollTo: {
        key: string
        value: any
    }

    headerComponent: any
    headerHeight: number
    footerComponent: any
    footerHeight: number
    style: any
}

interface Hiradumi {

    items: any[]
    rows: any[]
    rowHeights: number[]

    hiradumi: any
    prevScrollTo: {key: string | null, value: any}
}

class Hiradumi extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
        this.items = props.items.map( item => ({...item}))
        this.rows = []
        this.rowHeights = []
        this.hiradumi = null
        this.prevScrollTo = {key: null, value: null}
    }

    componentDidMount() {
        this.setRowData()
        this.checkScrollTo()
    }

    shouldComponentUpdate() {
        this.items = this.props.items.map( item => ({...item}))
        this.setRowData()
        this.checkScrollTo()
        return true
    }

    checkScrollTo() {
        if (this.props.scrollTo && this.props.scrollTo.value !== this.prevScrollTo.value) {
            const {key, value} = this.props.scrollTo
            setTimeout(() => {
                this.scrollTo(key, value)
            }, 100)
            this.prevScrollTo = JSON.parse(JSON.stringify(this.props.scrollTo))
        }
    }


    // 行の幅の範囲内にアイテムを入れる
    putItem(currentItems: any[], rowWidth: number, rowRatio: number) {
        const items:any[] = []
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
    pushPreviousRow(items: any[], prevItems: any[], rowTotalWidth: number) {
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
    sortCenter(items: any[]) {
        const sortLabel = this.props.sortKey
        if (sortLabel) {
            items.sort(function (a, b) {
                if (a[sortLabel] < b[sortLabel]) return 1
                if (a[sortLabel] > b[sortLabel]) return -1
                return 0
            })
        }
        const newRowData: any = {}
        const centerIndex = Math.floor(items.length / 2)
        newRowData[centerIndex] = items[0]
        Array.from({ length: centerIndex }).forEach((item, index) => {
            if (items[index * 2 + 1]) newRowData[centerIndex - 1 - index] = items[index * 2 + 1]
            if (items[index * 2 + 2]) newRowData[centerIndex + 1 + index] = items[index * 2 + 2]
        })
        return Object.values(newRowData)
    }

    setRowData() {
        let rowHeights: number[] = []
        let rows: any[] = []
        let prevRowItems: any[] = []

        if (this.props.headerComponent) {
            rows.push({type: 'header', component: this.props.headerComponent})
            rowHeights.push(this.props.headerHeight)
        }

        const rowMaxWidth = this.props.width - this.props.padding * 2 - getScrollbarWidth()

        splitByNumber(this.items, 100).some((items, index) => {
            // 行数制限
            if (this.props.rowCount === rows.length) return true

            const rowRatioIndex = index % this.props.rowRatios.length
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
                    rowHeights.pop()
                }
            }

            // sortKeyでソートして、中央から並べ直す
            if (this.props.sortKey) rowItems = this.sortCenter(rowItems)

            rows.push(rowItems)
            prevRowItems = rowItems
            
            // 行の高さを割り出してセット
            let heights:number[] = []
            rowItems.forEach((item) => {
                heights.push(item.height + this.props.itemMargin)
            })
            rowHeights.push(Math.max(...heights))
    
        })

        if (this.props.footerComponent) {
            rows.push({type: 'footer', component: this.props.footerComponent})
            rowHeights.push(this.props.footerHeight)
        }

        this.rows = rows
        this.rowHeights = rowHeights

    }

    onScroll(event: any) {
        if (!this.hiradumi) return
        const scrollArea = this.hiradumi.firstElementChild
        event.scrollTop = scrollArea.scrollTop
        event.scrollBottom = scrollArea.scrollHeight - scrollArea.clientHeight - scrollArea.scrollTop
        this.props.onScroll(event)
    }

    scrollTo(key: string, value: any) {
        let index: number
        this.rows.forEach((items, i) => {
            if (typeof items.type==='undefined' && items.filter((item: any)=> item[key] === value).length > 0) {
                index = i
            }
        })
        let height = this.props.padding
        this.rowHeights.some((rowHeight, i) => {
            if (i===index) return true
            height += rowHeight
        })
        const timer = setInterval(() => {
            if (this.hiradumi.firstElementChild.scrollTop >= height) {
                return clearTimeout(timer)
            }
            // console.log(this.hiradumi.firstElementChild.scrollTop)
            this.hiradumi.firstElementChild.scrollTo(0, height)
        }, 1)
        setTimeout(() => {
            clearTimeout(timer)
        }, 1000)
    }

    render() {
        return (<div className={this.props.className ? this.props.className : 'hiradumi'}
            ref={(element) => this.hiradumi = element}
        >
            <List
                width={this.props.width}
                height={this.props.height}
                itemCount={this.rows.length}
                itemSize={(index: number) => this.rowHeights[index]}
                onScroll={this.onScroll.bind(this)}
                style={this.props.style}
            >
                {(item: any) => {
                    const row = this.rows[item.index]
                    return this.renderRow(row, item.style)
                }}
            </List>
        </div>)
    }

    renderRow(row: any, style: any) {
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
                    {row.map((item: any) => {
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
  
export default Hiradumi





