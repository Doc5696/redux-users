import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard/container";
import { Provider } from "react-redux";
import rootStore from "./store/createStore";

ReactDOM.render(
  <Provider store={rootStore}>
    <BrowserRouter>
      <Route path={["/dashboard", "/"]} component={Dashboard} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
