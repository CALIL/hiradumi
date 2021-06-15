import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';

fetch('https://nxc.calil.dev/bookfair/all.json').then((r) => r.json()).then((r) => {
    ReactDOM.render(<App items={r} />, document.getElementById('root'));
})
