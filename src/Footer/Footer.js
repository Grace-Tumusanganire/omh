import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <footer className="bg-dark text-white mt-5 p-2 text-center footer fixed-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-8">
              <ul className="nav">
                <li className="nav-item" title="Twitter">
                  <a
                    target="_blank"
                    className="nav-link"
                    href="https://twitter.com/PregnancyCare3"
                  >
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="nav-item" title="Instagram">
                  <a
                    target="_blank"
                    className="nav-link"
                    href="https://www.instagram.com/?hl=en"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4">
              <ul className="nav">
                <li className="nav-item">
                  <span>
                    Copyright &copy; {new Date().getFullYear()} TremendousLadies
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
