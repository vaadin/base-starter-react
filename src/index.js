import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
