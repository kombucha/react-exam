/**
 * Created by thomashourlier on 2/26/17.
 */

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// Actions
export { createJedi, fetchJedi } from "./action";

// Selectors
export { allJedi, isLoading, getError } from "./reducer";

export default store;
