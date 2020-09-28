import React, { Component } from "react";

function Signup() {
  return (
    <div className="container" id="signup">
      <div className="row justify-content-center">
        <div className="jumbotron">
          <form id="signup">
            <div className="form-group">
              <label for="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                className="form-control"
                placeholder="Enter first name"
              />
            </div>
            <div className="form-group">
              <label for="firstname">Last Name</label>
              <input
                type="text"
                id="lastname"
                className="form-control"
                placeholder="Enter last name"
              />
            </div>
            <div className="form-group">
              <label for="firstname">Tel:</label>
              <input
                type="telephone"
                id="firstname"
                className="form-control"
                placeholder="Phone number"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signup;
