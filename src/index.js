import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store.js';
import {Provider} from 'react-redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store=configureStore();
ReactDOM.render(   
<Provider store={store}>
 <App />
 </Provider>, document.getElementById('root'));
registerServiceWorker();
