import React from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

import Row from "./Row";

type Props = {
  height: number;
  width: number;
};

const Hiradumi: React.FC<Props> = ({ height, width }) => {
  console.log(width, height);


  const parentRef = React.useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: 10000,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
    overscan: 5,
  });

  if (!width || !height) return null

  return (
    <>
      {/* The scrollable element for your list */}
      <div
        ref={parentRef}
        style={{
          width: width,
          height: height,
          overflow: "auto", // Make it scroll!
        }}
      >
        <slot name="header"></slot>
        {/* The large inner element to hold all of the items */}
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {/* Only the visible items in the virtualizer, manually positioned to be in view */}
          {rowVirtualizer.getVirtualItems().map((virtualItem) => (
            <div
              key={virtualItem.key}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            ></div>
          ))}
          <slot name="footer"></slot>
        </div>
      </div>
    </>
  );
};

export default Hiradumi;
