import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Navbar from "../navbar/Navbar";
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="conter">
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
                a number of pregnancy symptoms are seen after a women conceive
                though they differ accordingly some of them are common and below
                are some: Spotting Cramping Breast Changes Nausea (Morning
                Sickness) Missed Period
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        {/* <footer className="bg-dark text-white mt-5 p-4 text-center">
          Copyright &copy; {new Date().getFullYear()} TremendousLadies
        </footer> */}
        <footer className="navbar  bg-dark footer fixed-bottom">
          <p className="text-center">
            Copyright &copy;{new Date().getFullYear()} TremendousLadies{" "}
          </p>
        </footer>
      </div>
    );
  }
}
export default Home;
