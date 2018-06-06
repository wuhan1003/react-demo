import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './index.css';
// import App from './App';
import Routers from './routers/index';
import registerServiceWorker from './registerServiceWorker';
import 'src/assets/styles/iconfont.css';
import 'src/assets/styles/common.css';
import 'src/assets/styles/components.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reduce/reduce.js';
import axiosCofig from './axionsconfig';
const Store = createStore( reducers );
ReactDOM.render(
    <Provider store = { Store } >
        <Router>
            <Switch>
                {
                    Routers
                }
                
            </Switch>
        </Router>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
