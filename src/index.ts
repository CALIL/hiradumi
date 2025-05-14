import React from 'react';
import ReactDOM from 'react-dom/client';
import r2wc from 'react-to-webcomponent';
import Hiradumi from './Hiradumi';

const CustomElement = r2wc(Hiradumi, React, ReactDOM, {
  props: {
    // maxNumber: "string", // 設定できる図書館の最大数
    // selectedSystemIds: "string", // 設定済みの図書館のsystemid
    // backUrl: "string", // 戻るボタンで移動するURL
  },
//   events: { onComplete: { bubbles: true } }, // 図書館を設定を押したときに実行される関数 引数は選択済み図書館のsystemidの配列
  // shadow: 'closed'
});

customElements.define('hiradumi', CustomElement);
