import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers'

const middlewares = [thunk, logger],
    initialState = {};

const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

export default store;
