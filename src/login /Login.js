import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Navbar from "../navbar/Navbar";
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-sm-8 m-auto my-container">
              <h1 className="text-center">Log In</h1>
              <p className="text-center">
                Sign in to your Pregnancy care account
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-outline-warning btn-block mt-4 btn-lg"
                />
              </form>
              <br />
              <p className="text-center">
                Don't have an account?
                <Link to="/Register" className="btn btn-link bold">
                  Create it.
                </Link>
              </p>
              <a href="" className="btn btn-link btn-block bold">
                Forgot password ?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
