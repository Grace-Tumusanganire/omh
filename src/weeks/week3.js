import React, { Component } from "react";
import SideBar from "../sideBar";
export default class week3 extends Component {
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
              src="https://media.front.xoedge.com/images/2d755de1-1705-4709-9493-1b55b30ef49a"
              alt=""
            />
          </div>
          <h2>3 Weeks Pregnant</h2>
          <p>
            Sperm met egg last week, and voila—you've made a baby! It’s so
            ridiculously early that when you’re 3 weeks pregnant, you may have
            no idea that you’re actually pregnant. Conception just happened a
            few days ago, and there probably hasn't been time for you to miss a
            period yet at week 3 of pregnancy.
          </p>
          <h2> 3 Weeks Pregnant Symptoms</h2>
          <p>
            When you’re 3 weeks pregnant, symptoms may not have appeared yet
            either. That’s because most early pregnancy symptoms are caused by
            pregnancy hormones, and you probably don’t have a very high level of
            those in your body yet. (Oh, but you’ll get there!) Some signs of
            pregnancy at 3 weeks—and the few weeks following—are: Implantation
            bleeding. If your little soon-to-be-embryo has already made it to
            his or her new home, you may see a bit of spotting as the fertilized
            egg burrows into the wall of your uterus. Nausea. As the pregnancy
            hormone hCG begins to make its way through your newly pregnant body,
            you may notice some feelings of queasiness—or nausea so bad it makes
            you puke. Morning sickness should really be called all-day sickness
            since it really doesn’t discriminate by time of day. If you’re
            feeling this symptom of pregnancy at three weeks, you may be further
            along than you thought. (Or—not to freak you out or anything,
            but—you may even be three weeks pregnant with twins! That’s because
            twin moms-to-be often have higher levels of pregnancy hormones—and
            therefore worse nausea.) Breast changes. Your boobs can start to get
            sore and your nipples may darken as your body starts prepping to
            make milk. Missed period. If your cycle is typically shorter than 28
            days, you may realize toward the end of this week that you could be
            pregnant. The only way to know for sure is to take a pregnancy test.
          </p>
        </div>
      </div>
    );
  }
}
