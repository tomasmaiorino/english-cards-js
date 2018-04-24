import React from 'react';
import ReactDOM from 'react-dom';
import './load.css';
import './mdb.css';
import './style.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
