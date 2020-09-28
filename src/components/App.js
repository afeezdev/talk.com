import React from "react";
import "../App.css";
import Routes from "../routes";
import Header from "./Header";
import Signup from "./Signup";
import Login from "./Login";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Login />
        <Signup />
        <Routes />
      </React.Fragment>
    );
  }
}

export default App;
