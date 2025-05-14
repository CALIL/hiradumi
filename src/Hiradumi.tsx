import React from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

import Row from "./Row";

type Props = {
  title: string;
  count: number;
  highlight: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

const Hiradumi: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  count,
  highlight,
  children,
  header,
  footer,
}) => {
  const wrapperStyle = {
    border: highlight ? "2px solid red" : "1px solid gray",
    padding: "1rem",
  };

  return (
    <div style={wrapperStyle}>
      {header}
      <h2>{title}</h2>
      <p>Count is {count}</p>
      <div className="slot-content">
        {children}
      </div>
      {footer}
    </div>
  );
};

export default Hiradumi;

// type Props = {
//     height: number;
//     width: number;
// }

// const Hiradumi: React.FC<React.PropsWithChildren<Props>> = ({height, width}: {height: number, width: number}) => {
//     const parentRef = React.useRef(null)

//     const rowVirtualizer = useVirtualizer({
//         count: 10000,
//         getScrollElement: () => parentRef.current,
//         estimateSize: () => 35,
//         overscan: 5,
//     })
//     return (
//     <>
//       {/* The scrollable element for your list */}
//       <div
//         ref={parentRef}
//         style={{
//           width: `${width}px`,
//           height: `${height}px`,
//           overflow: 'auto', // Make it scroll!
//         }}
//       >
//         <slot name="header"></slot>
//         {/* The large inner element to hold all of the items */}
//         <div
//           style={{
//             height: `${rowVirtualizer.getTotalSize()}px`,
//             width: '100%',
//             position: 'relative',
//           }}
//         >
//           {/* Only the visible items in the virtualizer, manually positioned to be in view */}
//           {rowVirtualizer.getVirtualItems().map((virtualItem) => (
//             <div
//               key={virtualItem.key}
//               style={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: `${virtualItem.size}px`,
//                 transform: `translateY(${virtualItem.start}px)`,
//               }}
//             >
//               <slot></slot>
//             </div>
//           ))}
//           <slot name="footer"></slot>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Hiradumi;
