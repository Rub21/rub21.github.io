import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./resources/css/style.css";

import Routes from "./routes";
import store from "./store";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={"/"}>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
