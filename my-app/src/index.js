import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducer from "./reducers";
import BleachList from "./components/BleachList";
import './styles.css';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <BleachList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
