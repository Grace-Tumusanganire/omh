import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Navbar from "../navbar/Navbar";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="conter">
          <div className="row">
            <div className="col-md-6">
              <br />
              <br />
              <br />
              <img
                className="img-fluid img-home"
                src="https://guardian.ng/wp-content/uploads/2016/07/pregnant_african_woman-istock_000012169363small.jpg"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <br />
              <br />
              <h2 className="float-left">Pregnancy care</h2>
              <div className="clearfix" />
              <h4 className="m-2">
                Are you wondering if you might be pregnant? would you like to
                make sure you are really pregnant? Are you getting some symptoms
                and you want to end the doubts??
              </h4>
              <br />
              <br />
              <Link to="/About" className="btn btn-outline-warning btn-lg">
                <span> Learn more </span>
                <i className="fa fa-arrow-circle-right" />
              </Link>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />

          <div className="row img-col-container">
            <div className="col-sm">
              <div className="img-container">
                <img
                  className="img-fluid mg-custom"
                  src="https://www.blackenterprise.com/wp-content/blogs.dir/1/files/2015/05/pregnant-black-woman-black-enterp3rise.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm">
              <div className="img-container">
                <img
                  className="img img-fluid mg-custom"
                  src="https://www.africanexaminer.com/wp-content/uploads/2014/11/pregnancy-photo-480x355.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm">
              <div className="img-container">
                <img
                  className="img img-fluid mg-custom"
                  src="https://guardian.ng/wp-content/uploads/2016/07/pregnant_african_woman-istock_000012169363small.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm">
              <p>
                Are you wondering if you might be pregnant? would you like to
                make sure you are really pregnant? Are you getting some symptoms
                and you want to end the doubts?? The only way to know for sure
                is by taking a pregnancy test.
              </p>
              <p>
                However there are early symptoms of pregnancy that may point to
                the possibility and you might wonder whether all women get these
                symptoms? But we have to know Every woman is different. So are
                her experiences of pregnancy. Not every woman has the same
                symptoms or even the same symptoms from one pregnancy to the
                next.
              </p>
            </div>
            <div className="col-sm">
              <p>
                A number of pregnancy symptoms are seen after a women conceive
                though they differ accordingly. Some of them are common and
                below are some: Spotting Cramping Breast Changes Nausea (Morning
                Sickness),Missed Period.
              </p>
              <p>
                What follows is a description of some of the most common early
                symptoms of pregnancy. You should know that these symptoms may
                be caused by other things besides being pregnant. So the fact
                that you notice some of these symptoms does not necessarily mean
                you are pregnant. The only way to tell for sure is with a
                pregnancy test.
              </p>
              <Link
                className="btn btn-warning btn-lg float-right"
                to="/general"
              >
                Pregnancy week by week
              </Link>
            </div>
          </div>
        </div>
        {/* <footer className="navbar  bg-dark footer fixed-bottom">
          <p className="text-center">
            Copyright &copy;{new Date().getFullYear()} TremendousLadies{" "}
          </p> */}
        {/* <div className="row">
            <div className="col-sm">
              <h3>Help Center</h3>
              <ul>
                <li>FAQs</li>
                <li>Services</li>
              </ul>
              <h3>Customer Information</h3>
              <ul>
                <li>About Us</li>
                <li>FAQs</li>
                <li>Contact Us</li>
              </ul>
              <h3>Security$Privacy</h3>
              <ul>
                <li>Terms Of Use</li>
                <li>Privacy Policy</li>
                <li>Location</li>
              </ul>
            </div>
          </div> */}
        {/* </div></footer> */}
      </div>
    );
  }
}

export default Home;
