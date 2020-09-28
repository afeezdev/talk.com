import React from "react";
import "../home.css";

class Home extends React.Component {
  render() {
    const mystyle = {
      fontFamily: "Lobster",
    };

    return (
      <>
        <div className="container-fluid my-5">
          <div className="row col-sm-12 col-md-12 col-lg-12 justify-content-center my-5 ">
            <h1 className="display-2 text-primary" style={mystyle}>
              Welcome to <span className="text-danger">T</span>alk.com
            </h1>
          </div>
          <div className="row  col-sm-12 col-md-12 col-lg-12 justify-content-center ">
            <button className="btn btn-outline-primary mx-1 ">Log in</button>
            <button className="btn btn-outline-secondary ">Register</button>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
