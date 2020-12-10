/**
 * Index.js
 *
 * The entrypoint of the application
 * Creates the redux store and
 * wraps the app in the store provider
 */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers"; // contains the combineReducer
import App from "./components/App";

const store = createStore(
  rootReducer, // the reducer
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // to work with the redux dev tools extension
);

render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
