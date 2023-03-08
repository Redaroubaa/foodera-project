import {applyMiddleware, createStore}from 'redux'

import reduxThunk from "redux-thunk"
import CounterReducer from './Reducer/CounterReducer'
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const Store=createStore(CounterReducer, enhancer(applyMiddleware(reduxThunk)));

export default Store