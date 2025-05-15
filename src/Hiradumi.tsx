import React, {use, useEffect, useRef, useState} from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'

// import Row from './Row'
import Item from './Item'
import { layoutCalculator } from './layoutCalculator'
import { getScrollbarWidth } from './getScrollBarWidth'

type Props = {
  height: number
  width: number
  data: string
}

const itemHeightDefault = 100;
const itemSizes = [0.6, 0.8, 1, 1.2, 1.5, 2];
const defaultRatio = 2/3;

const Hiradumi: React.FC<Props> = ({ height, width, data }) => {
  const parentRef = useRef<HTMLDivElement>(null)

  const [items, setItems] = useState([] as any[] | null)
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  // const [rowCount, setRowCount] = useState(0)

  // const rowVirtualizer = useVirtualizer({
  //   count: rowCount,
  //   getScrollElement: () => parentRef.current,
  //   estimateSize: () => itemHeightDefault,
  //   overscan: 5,
  // });

  // const [rows, setRows] = useState(null as any[] | null);

 // コンポーネント初期化時にスクロールバー幅を取得
  useEffect(() => {
    setScrollbarWidth(getScrollbarWidth());
  }, []);

  useEffect(() => {
    if (!data) return
    const parsedData = JSON.parse(data)
    // スクロールバー幅を考慮した有効幅を計算
    const effectiveWidth = width - scrollbarWidth;
    const items = layoutCalculator(parsedData, {
      width: effectiveWidth,
      defaultHeight: itemHeightDefault,
      defaultAspect: defaultRatio
    })
    setItems(items)
    // setRows(rows)
  }, [data, width])

  // useEffect(() => {
  //   if (!rows) return;
  //   setRowCount(rows.length);
  // }, [rows]);

  // if (!width || !height || !rows) return null;


  return (<>
    <div
      ref={parentRef}
      style={{
        position: 'relative',
        width: width,
        // height: height,
        overflow: 'hidden',
      }}
    >
      {items && items.length > 0 && (
        <div
          style={{
            // display: 'flex',
            // justifyContent: 'space-between',
            width: '100%',
            position: 'relative'
          }}
        >
          {items.map((item, index) => (
            <Item key={index} item={item}></Item>
          ))}
        </div>
      )}
    </div>
  </>)


  // return (
  //   <>
  //     {/* <slot name="header"></slot> */}
  //     <div
  //       ref={parentRef}
  //       style={{
  //         width: width,
  //         height: height,
  //         overflow: 'auto',
  //       }}
  //     >
  //       <div
  //         style={{
  //           height: `${rowVirtualizer.getTotalSize()}px`,
  //           width: '100%',
  //           position: 'relative'
  //         }}
  //       >
  //         {rowVirtualizer.getVirtualItems().map((virtualItem) => (
  //           <div
  //             key={virtualItem.key}
  //             style={{
  //               top: 0,
  //               left: 0,
  //               width: '100%',
  //               height: `${virtualItem.size}px`,
  //               transform: `translateY(${virtualItem.start}px)`,
  //             }}
  //           >
  //               <Row index={virtualItem.index} data={rows[virtualItem.index]}></Row>
  //           </div>
  //         ))}
  //       </div>
  //       {/* <slot name="footer"></slot> */}
  //     </div>
  //   </>
  // );
};

export default Hiradumi;
