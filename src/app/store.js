import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import counterReducer from "./Features/Counter/reducer";
import { thunk } from "redux-thunk";


let rootReducer = combineReducers({
    counter: counterReducer
});

const composeEnhanchers = window.__REDUX_DEVTOOL_EXTENTION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhanchers(applyMiddleware(thunk)));
export default store;