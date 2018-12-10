import React, { Component } from "react";
import "./About.css";
import Navbar from "../navbar/Navbar";
export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>About Pregnancy care </h1>
        <p>
          We are a six group Rwandans girls passionate about making women's
          lives better
        </p>
        <h2>Mission</h2>
        <p>
          To empower family planning, secure women pregnancy cycle, and to save
          the future generation.
        </p>
        <h2>Vision</h2>
        <p>guiding women's reproductive health to have a safe generation </p>
      </div>
    );
  }
}
