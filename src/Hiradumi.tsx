import React, {useEffect, useRef, useState} from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'

import Item from './Item'
import { layoutCalculator } from './layoutCalculator'
import type { ItemType } from './layoutCalculator'
import { getScrollbarWidth } from './utils/getScrollBarWidth'

type Props = {
  height: number
  width: number
  data: ItemType[] | null
}

const itemHeightDefault = 250
const itemScales = [1.5, 1.2, 1, 0.8, 0.6]
const defaultRatio = 2/3

const Hiradumi: React.FC<Props> = ({ height, width, data }) => {
  const parentRef = useRef<HTMLDivElement>(null)

  const [rows, setRows] = useState([] as ItemType[][])
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const [rowHeights, setRowHeights] = useState([] as number[])
  
  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: (index) => rowHeights[index],
    overscan: 5,
  });

 // コンポーネント初期化時にスクロールバー幅を取得
  useEffect(() => {
    setScrollbarWidth(getScrollbarWidth())
  }, []);

  useEffect(() => {
    if (!data) return
    // スクロールバー幅を考慮した有効幅を計算
    const effectiveWidth = width - scrollbarWidth
    const rows = layoutCalculator(data, {
      width: effectiveWidth,
      defaultHeight: itemHeightDefault,
      defaultAspect: defaultRatio,
      itemScales: itemScales,
    })
    setRowHeights(rows.map(row => row[0].height))
    setRows(rows)
  }, [data, width, scrollbarWidth])


  if (!width || !height || !rows) return null;

  return (<>
    <div
      ref={parentRef}
      style={{
        position: 'relative',
        width: width,
        height: height,
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
  </>)


  return (
    <>
      {/* <slot name="header"></slot> */}
      <div
        ref={parentRef}
        style={{
          width: width,
          height: height,
          overflow: 'auto',
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
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
                <Row index={virtualItem.index} data={rows[virtualItem.index]}></Row>
            </div>
          ))}
        </div>
        {/* <slot name="footer"></slot> */}
      </div>
    </>
  );
};

export default Hiradumi;
