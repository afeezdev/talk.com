import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import "../App.css";
import Home from './Home';
import Header from "./Header";
import Profile from './Profile';
import Signup from "./Signup";
import Login from "./Login";
import Footer from "./Footer";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route  exact path="/" component={Home} />
          <Route  exact path="/login" component={Login} />
          <Route  exact path="/signup" component={Signup} />
          <Route  path="/profile" component={Profile} />
        </Switch>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default App;
