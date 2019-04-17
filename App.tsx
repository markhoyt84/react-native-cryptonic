import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './src/reducers';
import Home from "./src/container/HomeContainer";

const AppStackNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        initialRouteName: "Home",
        headerMode: "none"
    }
);

const reduxLogger = store => {
    return next => {
        return action => {
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

const App = createAppContainer(AppStackNavigator);

export default () => (
    <Provider store={store}>
      <App />
    </Provider>
);
