import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";

import store from "./redux/store";

import App from "./App";
import AppStyles from "./App-styles";

import * as serviceWorker from "./serviceWorker";

axios.defaults.baseURL = "http://localhost:5000/api";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppStyles />
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
