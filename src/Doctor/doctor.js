import React, { Component } from "react";
import Navbar from "../navbar/Navbar";

export default class doctor extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="row">
          <div className="colmn">
            <h2>doctor 1</h2>
            <img
              className="img img-fluid mg-custom"
              src="http://www.bounty.com/pregnancy-and-birth/diet-and-health-in-pregnancy/health-and-wellness"
              alt=""
            />
            <p>
              Keeping healthy and fit during your pregnancy can help you and
              your baby
            </p>
          </div>
          <div className="colmn">
            <h2>doctor 2</h2>
            <img
              className="img img-fluid mg-custom"
              src="http://www.bounty.com/pregnancy-and-birth/preparing-for-your-new-arrival/the-first-photos-of-your-newest-family-member"
              alt=""
            />
            <p>
              A big part of your pregnancy will be preparing for your new
              arrival and making sure you’re all set to welcome your little one
              into the world. Get some helpful advice on birth planning and how
              to make a birth plan, find out what antenatal appointments and
              classes involve and learn more about how the nub theory can
              potentially help work out if you’re expecting a baby boy or girl
            </p>
          </div>
          <div className="colmn">
            <img
              className="img img-fluid mg-custom"
              src="http://www.bounty.com/baby-0-to-12-months/newborn/bounty-portrait-testimonials-photography-reviews"
              alt=""
            />
            <h2>doctor 2</h2>
            <p>
              As soon as you think you could be pregnant, you should check to
              find out if you are. There are several ways to find out if you are
              in fact pregnant: you can test your urine at home with a home
              pregnancy test you can have a blood test ordered by your doctor
              you can have your urine tested by your doctor your doctor can do
              an internal examination.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
