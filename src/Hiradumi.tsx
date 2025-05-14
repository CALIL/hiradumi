import React, {use, useEffect, useRef, useState} from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'

import Row from './Row'
import { J, V } from 'vitest/dist/chunks/reporters.d.DG9VKi4m.js'

type Props = {
  height: number
  width: number
  data: string
}

const itemHeightDefault = 100;
const itemSizes = [0.7, 0.8, 1, 1.2, 1.5];
const defaultRatio = 2/3;

const Hiradumi: React.FC<Props> = ({ height, width, data }) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [rowCount, setRowCount] = useState(0);

  let itemHeights: any[] = []

  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: (index: number) => itemHeights[index],
    overscan: 5,
  });

  const [rows, setRows] = useState(null as any[] | null);

  useEffect(() => {
    if (!data) return;
    const parsedData = JSON.parse(data);
    itemHeights = [];
    // 横幅に対して、itemの幅を計算し、あふれたら次の行に移動する
    const rows = [];
    let currentRow: any[] = [];
    let currentWidth = 0;
    parsedData.forEach((item: any) => {
        const aspect = item.properties?.aspect ? item.properties.aspect : defaultRatio;
        const selectedSize = itemSizes[currentRow.length % itemSizes.length];
        let itemHeight = itemHeightDefault * selectedSize;
        let itemWidth = itemHeight * aspect;
        const totalWidth = currentWidth + itemWidth;
        if (width < totalWidth) {
            itemHeights.push(itemHeight);
            rows.push(currentRow);
            currentRow = [];
            currentWidth = 0;
        }
        currentRow.push(item);
        currentWidth += itemWidth;
        console.log('currentWidth', currentWidth);
    });
    if (currentRow.length > 0) {
        rows.push(currentRow);
    }
    setRows(rows);
  }, [data, width]);

  useEffect(() => {
    if (!rows) return;
    setRowCount(rows.length);
  }, [rows]);

  if (!width || !height || !rows) return null;

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
