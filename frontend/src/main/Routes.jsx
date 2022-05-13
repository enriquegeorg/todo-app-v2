import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import Todo from "../todo/Todo";
import About from "../about/About";

const Routes = (props) => (
  <Router history={hashHistory}>
    <Route path="/" component={Todo} />
    <Route path="/about" component={About} />
    <Redirect from="*" to="/" />
  </Router>
);

export default Routes;
