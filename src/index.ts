import React from 'react';
import ReactDOM from 'react-dom/client';
import r2wc from 'react-to-webcomponent';
import Hiradumi from './Hiradumi';

const HiradumiComponent = r2wc(Hiradumi, React, ReactDOM, {
  props: {
    data: 'json',
    renderItem: 'function',
  },
  shadow: 'open'
});

customElements.define('hiradumi-component', HiradumiComponent);