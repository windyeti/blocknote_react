import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './app/Store';

import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';
import Calc from './app/pages/Calc';
import Contacts from './app/pages/Contacts';

const app = document.getElementById('app');

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} >
            <Route path="/" component={Layout}>
                <IndexRoute component={Main}/>
                <Route path="calc" component={Calc}/>
                <Route path="contacts" component={Contacts}/>
            </Route>
        </Router>
    </Provider>,
app);