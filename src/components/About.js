import React from "react";
import Teammate from "../components/Teammate";
import rammus from "../assets/rammus.png";
import akshan from "../assets/akshan.png";
import "../styles/About.css";

const About = () => {
  return (
    <div id="about">
      <div className="title">meet the team!</div>
      <div>
        <Teammate
          pic={rammus}
          name={'Kylie Chao-wen "quyxx" Hsu'}
          role={"CEO"}
        />
      </div>
      <div id="subordinates">
        <Teammate pic={akshan} name={'Annie "Ryuu" Queen'} role={"CMO"} />
        <Teammate
          pic={rammus}
          name={'Joshua Arukisato "Arki" Sato'}
          role={"CFO"}
        />
        <Teammate
          pic={rammus}
          name={'Mr. Andrew "pilocase" Gamer'}
          role={"Senior Principal Executive Booster"}
        />
        <Teammate
          pic={rammus}
          name={'Ryan "Zukshin" Shin'}
          role={"Associate Booster"}
        />
        <Teammate
          pic={rammus}
          name={'Bao Bao "dan tat" Alan'}
          role={"Associate Booster"}
        />
        <Teammate
          pic={rammus}
          name={'Chriktopher "LlTTLEST LEGEND" 119'}
          role={"Booster Intern"}
        />
      </div>
    </div>
  );
};

export default About;
