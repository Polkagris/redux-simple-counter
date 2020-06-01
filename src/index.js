import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { counterApp } from "./store/reducer";
import { Provider } from "react-redux";
import { doIncrementation } from "./store/actions";

const store = createStore(
  counterApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(doIncrementation());
store.dispatch(doIncrementation());
store.dispatch(doIncrementation());

unsubscribe();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
