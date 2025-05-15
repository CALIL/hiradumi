import { describe, it, expect } from 'vitest'
import { layoutCalculator, setItemSize } from '../layoutCalculator'

describe('layoutCalculator', () => {
  // 基本的な機能テスト
  it('1行に収まる項目が正しく配置される', () => {
    const items = [
      { width: 0, height: 0, aspect: 1 },    // 正方形
      { width: 0, height: 0, aspect: 0.75 }, // 横長
      { width: 0, height: 0, aspect: 1.2 }   // 縦長
    ]
    
    const result = layoutCalculator(items, { width: 1000 })
    
    // 結果の検証
    expect(result.length).toBe(3)
    // サイズが設定されているか
    expect(result[0].width).toBeGreaterThan(0)
    expect(result[0].height).toBeGreaterThan(0)
    // アスペクト比が保持されているか
    expect(result[0].width / result[0].height).toBeCloseTo(1)
    expect(result[1].width / result[1].height).toBeCloseTo(0.75)
    expect(result[2].width / result[2].height).toBeCloseTo(1.2)
  })
      
  it('元の配列が変更されない（新しい配列が返される）', () => {
    const originalItems = [
      { width: 10, height: 20, aspect: 1 },
      { width: 30, height: 40, aspect: 0.8 }
    ]
    
    // 元のオブジェクトのディープコピーを作成
    const itemsCopy = JSON.parse(JSON.stringify(originalItems))
    
    const result = layoutCalculator(originalItems, { width: 500 })
    
    // 結果が新しいオブジェクトであることを確認
    expect(result).not.toBe(originalItems)
    
    // 元の配列の値が変更されていないことを確認
    expect(originalItems[0].width).toBe(itemsCopy[0].width)
    expect(originalItems[0].height).toBe(itemsCopy[0].height)
    expect(originalItems[1].width).toBe(itemsCopy[1].width)
    expect(originalItems[1].height).toBe(itemsCopy[1].height)
  })
  
  it('空の配列が渡された場合、空の配列を返す', () => {
    const result = layoutCalculator([], { width: 500 })
    expect(result).toEqual([])
  })
})

describe('setItemSize', () => {
  it('itemHeightとwidthRatioに基づいて高さと幅が正しく設定される', () => {
    const item = { width: 0, height: 0, aspect: 2 }
    const itemHeight = 100
    const widthRatio = 0.8
    
    setItemSize(item, itemHeight, widthRatio)
    
    // 高さの検証
    expect(item.height).toBeCloseTo(itemHeight * widthRatio)
    
    // 幅の検証（高さ × アスペクト比）
    expect(item.width).toBeCloseTo(item.height * item.aspect)
    
    // アスペクト比が保持されているか確認
    expect(item.width / item.height).toBeCloseTo(item.aspect)
  })
  
  it('異なるアスペクト比のアイテムでも正しく計算される', () => {
    const testCases = [
      { aspect: 0.5, itemHeight: 100, widthRatio: 1 },   // 横長
      { aspect: 1, itemHeight: 150, widthRatio: 0.9 },   // 正方形
      { aspect: 2, itemHeight: 80, widthRatio: 1.2 },    // 縦長
    ]
    
    testCases.forEach(testCase => {
      const item = { width: 0, height: 0, aspect: testCase.aspect }
      setItemSize(item, testCase.itemHeight, testCase.widthRatio)
      
      expect(item.height).toBeCloseTo(testCase.itemHeight * testCase.widthRatio)
      expect(item.width).toBeCloseTo(item.height * item.aspect)
    })
  })
})