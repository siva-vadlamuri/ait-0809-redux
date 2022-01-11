import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./reducer";
// import thunk from "react-redux";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const Store = createStore(reducer, applyMiddleware(thunk));
