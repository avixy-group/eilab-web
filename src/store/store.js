import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";

// Initial states here
const initalState = {};

// Middleware
const middleware = [thunk];

// Creating store
export const store = createStore(
    rootReducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
);

// Assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
