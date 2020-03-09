import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import App from "./components/App";
import { Provider } from "react-redux";

import configureStore from "./stores/configureStores";

const store = configureStore();

const Widget = () => {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Widget />
  </Provider>,
  document.getElementById("root")
);
