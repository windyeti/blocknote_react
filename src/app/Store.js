import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer } from 'react-router-redux';

import reducerGetSelects from './reducers/reducerGetSelects';
import reducerGetCheckboxs from './reducers/reducerGetCheckboxs';
import reducerSetIdActiveForm from './reducers/reducerSetIdActiveForm';

const reducers = combineReducers({
    routing : routerReducer,
    selects : reducerGetSelects,
    checkboxs : reducerGetCheckboxs,
    idActiveFrom : reducerSetIdActiveForm
    }
);
const middleware = applyMiddleware(thunk);

const store = createStore(reducers, composeWithDevTools( middleware ));

export default store;