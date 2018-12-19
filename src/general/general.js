import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import SideBar from "../sideBar";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
export default class general extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <SideBar />
        </div>
        <div className="col-md-9">
          <h1>PREGNANCY WEEK BY WEEK</h1>
          <div className="img-container">
            <img
              className="img-fluid mg-custom"
              src="https://media.front.xoedge.com/images/ada7c546-9728-4497-94b6-476442b0577b"
              alt=""
            />
          </div>
        </div>

        <p />
      </div>
    );
  }
}
