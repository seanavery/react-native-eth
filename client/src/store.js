import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import * as Reducers from './reducers';

const reducer = combineReducers({ ...Reducers });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
