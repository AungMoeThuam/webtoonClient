import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/tailwindcss/tailwind.style.css";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers/index";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,

  document.getElementById("root")
);
