import React from "react";
import Teammate from "../components/Teammate";
import rammus from "../assets/rammus.png";
import "../styles/About.css";

const About = () => {
  return (
    <div id="about">
      <div className="title">meet the team!</div>
      <div id="team">
        <Teammate
          pic={rammus}
          name={'Kylie Chao-wen "quyxx" Hsu'}
          role={"CEO"}
        />
      </div>
    </div>
  );
};

export default About;
