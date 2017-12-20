import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer } from 'react-router-redux';

import reducerGetForms from './reducers/reducerGetForms';
import reducerSetIdActiveForm from './reducers/reducerSetIdActiveForm';

const reducers = combineReducers({
    routing : routerReducer,
    forms : reducerGetForms,
    idActiveFrom : reducerSetIdActiveForm
    }
);
const middleware = applyMiddleware(thunk);

const store = createStore(reducers, composeWithDevTools( middleware ));

export default store;