import React, { Component } from "react";
import "./About.css";
import Navbar from "../navbar/Navbar";
export default class About extends Component {
  render() {
    return (
      <div className="about-page">
        <Navbar />
        <h1>About Pregnancy care</h1>
        <p>
          We are a six group Rwandans girls passionate about making women's
          lives better In Rwanda, young teenagers don’t plan to get pregnant,
          but they do get pregnant.In this case, there are a lot of problems and
          risks that are encountered. For instance, the biggest risk is that the
          teen mothers decide to keep their pregnancies in secret because they
          are in fear of the society as well as their families.According to ‘The
          State of the World’s Children’(2010), a 160- page report released by
          UNICEF, ‘each year 70,000 females between the ages on 15-19 die during
          childbirth, a rate that is five times higher than that for women in
          their 20s.’ In addition, If current trends continue, over 60 million
          children under 5 years of age will die between 2017 and 2030 globally,
          about half of which would be newborns(The New Times,2018). The
          government of Rwanda is willing to help the young girls who face such
          problems as a way to save the future generation of Rwanda. Therefore,
          as young girls of Rwanda, we are here to contribute to the solutions
          of this problem by creating an app that will provide all the
          information needed during the pregnancy period, and provide
          professional help whenever needed by pregnant mothers/girls.
        </p>
        <h2>Mission</h2>
        <p>
          To empower family planning, secure women pregnancy cycle, and to save
          the future generation.
          <p>
            {" "}
            Help young girls with unplanned pregnancy get used to the next nine
            months for the safety of their delivery period
          </p>
        </p>
        <h2>Vision</h2>
        <p>guiding women's reproductive health to have a safe generation </p>
      </div>
    );
  }
}
