/**
 * ブラウザのスクロールバーの横幅を取得する
 * 
 * この関数は一時的なDOM要素を作成し、オーバーフローの状態でスクロールバーの幅を測定します。
 * キャッシュを使用して複数回の呼び出しを最適化します。
 * 
 * @returns スクロールバーの幅（ピクセル）
 */
export function getScrollbarWidth(): number {
  // キャッシュした値があれば返す
  if (typeof document === 'undefined') {
    return 0; // SSRの場合は0を返す
  }

  // 静的変数としてキャッシュ
  if ((getScrollbarWidth as any).cachedWidth !== undefined) {
    return (getScrollbarWidth as any).cachedWidth;
  }

  // 外側のコンテナ（スクロールなし）
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  document.body.appendChild(outer);

  // 内側のコンテナ
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // スクロールバーの幅 = 外側の幅 - 内側の幅
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // 一時要素を削除
  outer.parentNode?.removeChild(outer);

  // 結果をキャッシュ
  (getScrollbarWidth as any).cachedWidth = scrollbarWidth;

  return scrollbarWidth;
}

/**
 * ブラウザがオーバーレイスクロールバーを使用しているかを検出する
 * オーバーレイスクロールバーはコンテンツの上に表示され、幅を取らない
 * 
 * @returns オーバーレイスクロールバーを使用している場合はtrue
 */
export function hasOverlayScrollbars(): boolean {
  return getScrollbarWidth() === 0;
}

export default getScrollbarWidth;