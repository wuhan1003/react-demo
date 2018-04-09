import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import Routers from './pages/index';
import registerServiceWorker from './registerServiceWorker';
import 'src/assets/styles/iconfont.css';
import 'src/assets/styles/common.css';
import 'src/assets/styles/components.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reduce/reduce.js';
const Store = createStore( reducers );
ReactDOM.render(
    <Provider store = { Store } >
        <Routers/>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
