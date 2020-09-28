import React, { Component } from "react";

function Login() {
  return (
    <>
      <div className="container" id="login">
        <div className="row justify-content-center">
          <div className="jumbotron">
            <form>
              <div className="form-group">
                <label for="email">email:</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  id="email"
                  required
                />
                <label for="password">password:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  required
                />
                <button
                  type="submit"
                  className="form-control btn btn-primary my-2"
                >
                  Login
                </button>
                Remember my Password?
                <input type="checkbox" className="mx-1" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
