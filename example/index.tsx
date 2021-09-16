import React from 'react';
import ReactDOM from 'react-dom';
import App from '../example/component/App';

fetch('https://bookdata-fair.calil.dev/all.json').then((r) => r.json()).then((r) => {
    ReactDOM.render(
        <React.StrictMode>
            <App items={r} />
        </React.StrictMode>,
    document.getElementById('root'));
})
