import React, {useEffect, useRef, useState} from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'

import Item from './Item'
import { layoutCalculator } from './layoutCalculator'
import type { ItemType } from './layoutCalculator'
import { getScrollbarWidth } from './utils/getScrollBarWidth'

type Props = {
  data: ItemType[] | null
}

const itemHeightDefault = 250
const itemScales = [1.5, 1.2, 1, 0.8, 0.6]
const defaultRatio = 2/3

const Hiradumi: React.FC<Props> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)

  const [width, setWidth] = useState(100)
  const [rows, setRows] = useState([] as ItemType[][])
  const [scrollbarWidth, setScrollbarWidth] = useState(0)
  const [rowHeights, setRowHeights] = useState([] as number[])
  
  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => scrollerRef.current,
    estimateSize: (index) => rowHeights[index],
    overscan: 5,
  })

 // コンポーネント初期化時にスクロールバー幅を取得
  useEffect(() => {
    setScrollbarWidth(getScrollbarWidth())
  }, [])

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return
    const shadowRoot = containerRef.current.getRootNode() as ShadowRoot
    // ホスト要素を取得
    const host = shadowRoot.host    
    // ホスト要素の親を取得
    const container = host.parentNode as HTMLElement
    setWidth(container.clientWidth)

    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        // contentBoxSizeが使えない場合はcontentRectを使用
        const boxSize = entry.contentBoxSize?.[0] || {
          inlineSize: entry.contentRect.width,
          blockSize: entry.contentRect.height
        }
        
        setWidth(boxSize.inlineSize)
      }
    })
    resizeObserver.observe(container)
    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!data) return
    // スクロールバー幅を考慮した有効幅を計算
    const effectiveWidth = width - scrollbarWidth
    const rows = layoutCalculator(data, {
      width: effectiveWidth,
      defaultHeight: itemHeightDefault,
      defaultAspect: defaultRatio,
      itemScales: itemScales
    })
    setRowHeights(rows.map(row => Math.max(...row.map(item => item.height || 0))))
    setRows(rows)
  }, [data, width, scrollbarWidth])


  if (!width || !rows) return null

  return (<div ref={containerRef} style={{width: '100%', height: '100%', overflow: 'hidden'}}>
    <div
      ref={scrollerRef}
      style={{
        position: 'relative',
        width: width,
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative'
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualItem) => (
            <div
              key={virtualItem.key}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              <div style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                width: '100%',
                height: '100%'
              }}>
              {rows[virtualItem.index].map((item, itemIndex) => (
                <Item key={virtualItem.index+'_'+itemIndex} item={item}></Item>
              ))}
              </div>
            </div>
          ))}
        </div>
    </div>
  </div>)
}

export default Hiradumi
