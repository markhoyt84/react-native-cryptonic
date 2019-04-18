import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './src/reducers';
import Home from "./src/container/HomeContainer";

const reduxLogger = (store: any) => {
    return (next: any) => {
        return (action: any) => {
            const result = next(action)
            return result
        }
    }
};

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        reduxLogger
    )
);

export default () => (
    <Provider store={store}>
      <Home />
    </Provider>
);
