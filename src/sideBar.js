import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
export default class Navbar extends Component {
  state = {};
  renderWeeks() {
    const numbers = [
      {
        name: "Week 1",
        link: "/week1"
      },
      {
        name: "Week 2",
        link: "/week2"
      },
      {
        name: "Week 3",
        link: "/week3"
      },
      {
        name: "Week 4",
        link: "/week4"
      }
    ];
    const listItems = numbers.map(number => (
      <li className="list-group-item">
        <Link to={number.link}>{number.name}</Link>
      </li>
    ));
    return listItems;
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <ul className="list-group">{this.renderWeeks()}</ul>
      </div>
    );
  }
}
