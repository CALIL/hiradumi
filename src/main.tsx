import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Hiradumi from "./Hiradumi";
import type { ItemType } from "./layoutCalculator";

(async () => {
  const r = await fetch("https://bookdata-fair.calil.dev/all.json");
  const items = await r.json();
  // console.log(items)
  const mixedItems = [] as ItemType[];
  let count = 1;
  items.forEach((item: any, index: number) => {
    if (item.properties && item.properties.aspect) {
      item.aspect = item.properties.aspect;
    }
    item.cover = `https://calil.jp/cover/${item.isbn}`;
    item.link = `https://calil.jp/book/${item.isbn}`;
    item.type = "image";
    mixedItems.push(item);
    // 10個ごとにテキストを挿入
    if (index % 10 === 0) {
      mixedItems.push({
        type: "text",
        title: "text" + count,
        width: 0,
        height: 0,
        aspect: 0,
      });
      count++;
    }
  });
  console.log(mixedItems);
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Hiradumi data={mixedItems}></Hiradumi>
    </StrictMode>
  );
})();
