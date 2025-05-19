import { describe, it, expect, vi } from 'vitest';
import { layoutCalculator, roundToDecimals, setItemSize } from '../layoutCalculator';
import type { ItemType } from '../layoutCalculator';

// プライベート関数のテスト用にモジュールからエクスポート
// 通常は実際にファイルを修正するか、モックを使用
// ここではテスト対象の関数を直接使用する想定

describe('roundToDecimals 関数', () => {
  it('小数点以下を2桁に丸める', () => {
    expect(roundToDecimals(1.234)).toBe(1.23);
    expect(roundToDecimals(1.235)).toBe(1.24); // 四捨五入
    expect(roundToDecimals(1.2)).toBe(1.2);
    expect(roundToDecimals(1)).toBe(1);
    expect(roundToDecimals(0)).toBe(0);
  });

  it('負数を正しく丸める', () => {
    expect(roundToDecimals(-1.234)).toBe(-1.23);
    expect(roundToDecimals(-1.235)).toBe(-1.24);
  });

  it('境界値を正しく丸める', () => {
    expect(roundToDecimals(0.995)).toBe(1);
    expect(roundToDecimals(0.994)).toBe(0.99);
  });
});

describe('setItemSize 関数', () => {
  it('高さと幅が正しく設定される', () => {
    const item: ItemType = {
      type: 'image',
      title: 'テスト画像',
      width: 0,
      height: 0,
      aspect: 1.5
    };

    setItemSize(item, 100, 1);
    
    expect(item.height).toBe(100);
    expect(item.width).toBe(150);
  });

  it('高さに比率が掛けられる', () => {
    const item: ItemType = {
      type: 'image',
      title: 'テスト画像',
      width: 0,
      height: 0,
      aspect: 1.5
    };

    setItemSize(item, 100, 0.5);
    
    expect(item.height).toBe(50);
    expect(item.width).toBe(75);
  });

  it('さまざまなアスペクト比で正しく計算される', () => {
    const portrait: ItemType = {
      type: 'image',
      title: '縦長',
      width: 0,
      height: 0,
      aspect: 0.75
    };

    const landscape: ItemType = {
      type: 'image',
      title: '横長',
      width: 0,
      height: 0,
      aspect: 1.33
    };

    setItemSize(portrait, 100, 1);
    setItemSize(landscape, 100, 1);
    
    expect(portrait.width).toBe(75);
    expect(portrait.height).toBe(100);
    
    expect(landscape.width).toBe(133);
    expect(landscape.height).toBe(100);
  });
});

describe('layoutCalculator 関数', () => {
  it('空の配列が渡された場合、空の配列を返す', () => {
    const result = layoutCalculator([], { width: 1000 });
    expect(result).toEqual([]);
  });

  it('1つの項目を正しく計算する', () => {
    const items: ItemType[] = [
      {
        type: 'image',
        title: '単一アイテム',
        width: 0,
        height: 0,
        aspect: 1.5
      }
    ];

    const result = layoutCalculator(items, { width: 300 });
    
    expect(result.length).toBe(1); // 1行
    expect(result[0].length).toBe(1); // 1行に1項目
    
    const item = result[0][0];
    expect(item.width).toBeCloseTo(300); // 幅いっぱいを使用
    expect(item.height).toBeCloseTo(300 / 1.5); // アスペクト比を維持
  });

  it('複数の項目を行に配置する', () => {
    const items: ItemType[] = [
      { type: 'image', title: '項目1', width: 0, height: 0, aspect: 1 },
      { type: 'image', title: '項目2', width: 0, height: 0, aspect: 1 },
      { type: 'image', title: '項目3', width: 0, height: 0, aspect: 1 }
    ];

    const result = layoutCalculator(items, { 
      width: 300,
      defaultHeight: 100,
      itemScales: [1] // スケールを固定
    });
    
    expect(result.length).toBe(1); // 1行
    expect(result[0].length).toBe(3); // 3項目
    
    // 同じ行の項目は同じ高さ
    const height = result[0][0].height;
    expect(result[0][1].height).toBe(height);
    expect(result[0][2].height).toBe(height);
    
    // 全体の幅が指定幅に一致
    const totalWidth = result[0].reduce((sum, item) => sum + item.width, 0);
    expect(totalWidth).toBeCloseTo(300);
  });

  it('幅を超えると新しい行に項目を配置する', () => {
    const items: ItemType[] = [
      { type: 'image', title: '項目1', width: 0, height: 0, aspect: 1.5 },
      { type: 'image', title: '項目2', width: 0, height: 0, aspect: 1.5 },
      { type: 'image', title: '項目3', width: 0, height: 0, aspect: 1.5 },
      { type: 'image', title: '項目4', width: 0, height: 0, aspect: 1.5 }
    ];

    const result = layoutCalculator(items, { 
      width: 200,
      defaultHeight: 100,
      itemScales: [1] // スケールを固定
    });
    
    expect(result.length).toBeGreaterThan(1); // 複数行
  });

  it('最後の行の項目数が3以下の場合、前の行と結合される', () => {
    const items: ItemType[] = [
      { type: 'image', title: '行1-1', width: 0, height: 0, aspect: 1 },
      { type: 'image', title: '行1-2', width: 0, height: 0, aspect: 1 },
      { type: 'image', title: '行1-3', width: 0, height: 0, aspect: 1 },
      { type: 'image', title: '行1-4', width: 0, height: 0, aspect: 1 },
      { type: 'image', title: '行2-1', width: 0, height: 0, aspect: 1 },
      { type: 'image', title: '行2-2', width: 0, height: 0, aspect: 1 }
    ];

    // 行1に4項目、行2に2項目（3以下）
    const result = layoutCalculator(items, { 
      width: 300,
      defaultHeight: 100,
      itemScales: [1] // スケールを固定
    });
    
    // 行が1つになる（結合される）
    expect(result.length).toBe(1);
    expect(result[0].length).toBe(6); // 全6項目
  });

  it('最後の行の項目数が4以上の場合、独立した行を維持する', () => {
    const items: ItemType[] = [
      { type: 'image', title: '行1-1', width: 0, height: 0, aspect: 1 },
      { type: 'image', title: '行1-2', width: 0, height: 0, aspect: 1 },
      { type: 'image', title: '行1-3', width: 0, height: 0, aspect: 1 },
      { type: 'image', title: '行1-4', width: 0, height: 0, aspect: 1 },
      { type: 'image', title: '行2-1', width: 0, height: 0, aspect: 1 },
      { type: 'image', title: '行2-2', width: 0, height: 0, aspect: 1 },
      { type: 'image', title: '行2-3', width: 0, height: 0, aspect: 1 },
      { type: 'image', title: '行2-4', width: 0, height: 0, aspect: 1 }
    ];

    const result = layoutCalculator(items, { 
      width: 300,
      defaultHeight: 100,
      itemScales: [1] // スケールを固定
    });
    
    // 2行を維持
    expect(result.length).toBe(2);
  });

  it('アスペクト比がない項目にデフォルト値を適用する', () => {
    const items: ItemType[] = [
      {
        type: 'text',
        title: 'アスペクト比なし',
        width: 0,
        height: 0,
        aspect: 0
      }
    ];

    const defaultAspect = 2/3;
    const result = layoutCalculator(items, { 
      width: 300,
      defaultAspect
    });
    
    expect(result[0][0].aspect).toBe(defaultAspect);
  });

  it('itemScalesオプションで行の高さが変化する', () => {
    // 異なるスケールを検証するため、複数行を作成
    const items: ItemType[] = Array(10).fill(null).map((_, i) => ({
      type: 'image',
      title: `項目${i}`,
      width: 0,
      height: 0,
      aspect: 1
    }));

    const itemScales = [1, 0.5, 2];
    const result = layoutCalculator(items, { 
      width: 200, // 複数行になるように狭くする
      defaultHeight: 100,
      itemScales
    });
    
    expect(result.length).toBeGreaterThan(1);
    
    // 行ごとのサイズ変化をチェック
    if (result.length >= 3) {
      const row1Height = result[0][0].height;
      const row2Height = result[1][0].height;
      const row3Height = result[2][0].height;
      
      // 行の高さが異なることを確認
      expect(row1Height).not.toBeCloseTo(row2Height);
      expect(row2Height).not.toBeCloseTo(row3Height);
      
      // スケールに従った比率を確認
      const ratio1to2 = row1Height / row2Height;
      expect(ratio1to2).toBeCloseTo(itemScales[0] / itemScales[1]);
    }
  });

  it('各行の幅の合計が指定幅と一致する', () => {
    const items: ItemType[] = Array(20).fill(null).map((_, i) => ({
      type: 'image',
      title: `項目${i}`,
      width: 0,
      height: 0,
      aspect: 0.8 + (i % 5) * 0.1 // バラエティに富んだアスペクト比
    }));

    const targetWidth = 500;
    const result = layoutCalculator(items, { width: targetWidth });
    
    // 各行の幅の合計を確認
    result.forEach(row => {
      const rowWidth = row.reduce((sum, item) => sum + item.width, 0);
      expect(rowWidth).toBeCloseTo(targetWidth, 0); // 小数点の誤差を考慮して整数部分だけチェック
    });
  });

  it('各行の項目が同じ高さに揃えられる', () => {
    const items: ItemType[] = [
      { type: 'image', title: '項目1', width: 0, height: 0, aspect: 0.8 },
      { type: 'image', title: '項目2', width: 0, height: 0, aspect: 1.2 },
      { type: 'image', title: '項目3', width: 0, height: 0, aspect: 1.5 }
    ];

    const result = layoutCalculator(items, { width: 400 });
    
    // 同じ行の項目は高さが同じ
    const firstRowHeight = result[0][0].height;
    for (let i = 1; i < result[0].length; i++) {
      expect(result[0][i].height).toBeCloseTo(firstRowHeight);
    }
  });

  it('元の項目が変更されない（ディープコピーが機能している）', () => {
    const originalItems: ItemType[] = [
      { type: 'image', title: '項目1', width: 10, height: 20, aspect: 1 },
      { type: 'image', title: '項目2', width: 30, height: 40, aspect: 0.8 }
    ];
    
    // コピーを保存
    const originalItemsCopy = JSON.parse(JSON.stringify(originalItems));
    
    layoutCalculator(originalItems, { width: 300 });
    
    // 元の配列が変更されていないことを確認
    expect(originalItems).toEqual(originalItemsCopy);
  });
});

// adjustItemWidth関数のテスト（間接的に）
describe('adjustItemWidth 関数（間接的なテスト）', () => {
  it('行の合計幅が目標幅と一致するように調整される', () => {
    // 単一行のケース
    const items: ItemType[] = [
      { type: 'image', title: '項目1', width: 0, height: 0, aspect: 1 },
      { type: 'image', title: '項目2', width: 0, height: 0, aspect: 1 }
    ];
    
    const targetWidth = 200;
    const result = layoutCalculator(items, { 
      width: targetWidth,
      defaultHeight: 100,
      itemScales: [1] // スケールを固定
    });
    
    // 行の幅の合計が目標幅に一致
    const rowWidth = result[0].reduce((sum, item) => sum + item.width, 0);
    expect(rowWidth).toBeCloseTo(targetWidth);
  });
  
  it('調整後も各項目のアスペクト比が維持される', () => {
    // さまざまなアスペクト比を持つ項目
    const items: ItemType[] = [
      { type: 'image', title: '項目1', width: 0, height: 0, aspect: 0.75 },
      { type: 'image', title: '項目2', width: 0, height: 0, aspect: 1.5 }
    ];
    
    const result = layoutCalculator(items, { 
      width: 300,
      defaultHeight: 100,
      itemScales: [1]
    });
    
    // 各項目のアスペクト比が維持されていることを確認
    for (const row of result) {
      for (const item of row) {
        const calculatedAspect = item.width / item.height;
        expect(calculatedAspect).toBeCloseTo(item.aspect, 1);
      }
    }
  });
});