import React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

import Row from './Row';

const Hiradumi = ({height, width}: {height: number, width: number}) => {
    const parentRef = React.useRef(null)

    const rowVirtualizer = useVirtualizer({
        count: 10000,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 35,
        overscan: 5,
    })
    return (
    <>
      {/* The scrollable element for your list */}
      <div
        ref={parentRef}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          overflow: 'auto', // Make it scroll!
        }}
      >
        {/* The large inner element to hold all of the items */}
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {/* Only the visible items in the virtualizer, manually positioned to be in view */}
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
              <Row key={virtualItem.index} index={virtualItem.index}></Row>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Hiradumi;