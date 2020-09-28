import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import Profile from "./components/Profile.js";

const Routes = (props) => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </Router>
);

export default Routes;
