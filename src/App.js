import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./navbar/Navbar";

import Login from "./login /Login";
import Register from "./Register";
import Home from "./Home/Home";
import About from "./Aboutus/About";
import Footer from "./Footer/Footer";
import general from "./general/general";
import week1 from "./weeks/week1";
import week2 from "./weeks/week2";
import week3 from "./weeks/week3";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          {/* <Route exact path="/" component={Landing} /> */}
          <div className="container content">
            <div className="row">
              <div className="col-md-12">
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/about" component={About} />
                <Route exact path="/general" component={general} />
                <Route exact path="/week1" component={week1} />
                <Route exact path="/week2" component={week2} />
                <Route exact path="/week3" component={week3} />
              </div>
            </div>

            {/*<Footer />*/}
          </div>
           <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
