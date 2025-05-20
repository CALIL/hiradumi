import React, {useEffect, useRef, useState} from 'react'
import type { ReactNode } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'

import DefaultItem from './DefaultItem'
import { layoutCalculator } from './layoutCalculator'
import type { ItemType } from './layoutCalculator'
import { getScrollbarWidth } from './utils/getScrollBarWidth'

type Props = {
  data: ItemType[] | null
  renderItem?: (item: ItemType) => ReactNode
}

const itemHeightDefault = 250
const itemScales = [1.5, 1.2, 1, 0.8, 0.6]
const defaultRatio = 2/3

const Hiradumi: React.FC<Props> = ({ data, renderItem }) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)

  const [width, setWidth] = useState(0)
  const [isWidthMeasured, setIsWidthMeasured] = useState(false)
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
    if (!rootRef.current || !scrollerRef.current) return
    const shadowRoot = rootRef.current.getRootNode() as ShadowRoot
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
        setIsWidthMeasured(true)
      }
    })
    resizeObserver.observe(container)
    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!data || !isWidthMeasured) return
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
  }, [isWidthMeasured, data, width, scrollbarWidth])

// DOM要素をReactで扱える形に変換する関数
  const adaptRenderer = (item: ItemType): ReactNode => {
    if (!renderItem) return <DefaultItem item={item} />;

    const renderedItem = renderItem(item);
    
    // すでにReact要素の場合はそのまま返す
    if (React.isValidElement(renderedItem)) {
      return renderedItem;
    }
    
    // DOM要素の場合、それを参照して表示するラッパーを返す
    if (renderedItem instanceof HTMLElement) {
      // DOM要素を表示するためのラッパーコンポーネント
      const DOMWrapper = ({ element }: { element: HTMLElement }) => {
        const containerRef = useRef<HTMLDivElement>(null);
        
        useEffect(() => {
          if (containerRef.current) {
            containerRef.current.innerHTML = '';
            containerRef.current.appendChild(element);
          }
          
          return () => {
            // クリーンアップ
            if (containerRef.current && containerRef.current.contains(element)) {
              containerRef.current.removeChild(element);
            }
          };
        }, [element]);
        
        return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
      };
      
      return <DOMWrapper element={renderedItem} />;
    }
    
    // その他の値（文字列など）はそのまま返す
    return renderedItem;
  };

  if (!rows) return null

  return (<div ref={rootRef} style={{width: '100%', height: '100%', overflow: 'hidden'}}>
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
                {rows[virtualItem.index].map((item, index) => (
                  <React.Fragment key={virtualItem.index + '_' + index}>
                    {adaptRenderer(item)}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
    </div>
  </div>)
}

export default Hiradumi
