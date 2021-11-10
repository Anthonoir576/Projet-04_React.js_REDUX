import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import App from "./App";
import "./styles/index.scss";

const store = createStore(

    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))

);

ReactDOM.render(
    
    <Provider store={store}>
    <App />
    </Provider>,

document.getElementById("root"));
