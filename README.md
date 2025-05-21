# hiradumi

書影をレイアウトするReact Component

A React component for creating virtualized grid layouts, ideal for book image galleries with dynamic sizing.


## Installation

```bash
npm install @calil/hiradumi
# or
yarn add @calil/hiradumi
```

## コンセプト

- 指定された横幅に収まるレイアウト
- アスペクト比の違う書影を組み合わせて配置できる
- 横幅の変化に追従する
- npmに公開する


## Basic Usage

```
import React, { useEffect, useState } from 'react';
import { Hiradumi } from '@calil/hiradumi';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // データを取得
    fetch('https://bookdata-fair.calil.dev/all.json')
      .then(r => r.json())
      .then(items => {
        const formattedItems = items.map(item => ({
          type: 'image',
          cover: `https://calil.jp/cover/${item.isbn}`,
          title: item.title,
          link: `https://calil.jp/book/${item.isbn}`,
          aspect: item.properties?.aspect || 0.7
        }));
        setData(formattedItems);
      });
  }, []);

  const renderItem = (item) => (
    <div style={{
      width: '100%',
      height: '100%',
      padding: '8px',
      boxSizing: 'border-box',
    }}>
      {item.type === 'image' ? (
        <img 
          src={item.cover} 
          alt={item.title} 
          style={{width: '100%', height: '100%', objectFit: 'cover'}} 
        />
      ) : (
        <div>{item.title}</div>
      )}
    </div>
  );

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Hiradumi data={data} renderItem={renderItem} />
    </div>
  );
}

export default App;
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `data` | `ItemType[]` | Yes | 表示するアイテムの配列 |
| `renderItem` | `(item: ItemType) => ReactNode` | No | アイテムのカスタムレンダーコンポネント |
| `defaultRatio` | `number` | No | デフォルトのアスペクト比（width/height）。デフォルト値: `2/3` |
| `itemHeight` | `number` | No | デフォルトのアイテムの高さ（px）。デフォルト値: `250` |
| `itemScales` | `number[]` | No | アイテムサイズのスケール配列。デフォルト値: `[1.5, 1.2, 1, 0.8, 0.6]` |


## ItemType Interface

```
interface ItemType {
  type?: string;       // 'image' or 'text'
  title?: string;      // Item title
  cover?: string;      // Cover image URL
  link?: string;       // Link URL
  width?: number;      // Width (calculated by layout engine if not provided)
  height?: number;     // Height (calculated by layout engine if not provided)
  aspect?: number;     // Aspect ratio (width/height)
}
```

## development

```
npm install
npm start
```

## test

```
npm run test
```

## publish to npm

```
npm run publish
```