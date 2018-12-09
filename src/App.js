import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Login from "./login /Login";
import Register from "./Register";
import Home from "./Home/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Navbar /> */}
          {/* <Route exact path="/" component={Landing} /> */}
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
