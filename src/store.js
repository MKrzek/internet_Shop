import { createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';

import rootReducer from "./reducers/index.js";

const history=createHistory();

export function configureStore(initialState){
   const store = createStore(
       rootReducer,
       initialState,
       compose(applyMiddleware(thunk, routerMiddleware(history)))
   )
   return store
};