import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/** Polyfill required for web components **/
import '@webcomponents/webcomponentsjs/webcomponents-sd-ce.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
