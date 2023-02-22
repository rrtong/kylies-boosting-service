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
          url={"https://soliloquyxxx.livejournal.com/"}
          name={'Kylie Chao-wen "quyxx" Hsu'}
          role={"CEO"}
        />
      </div>
      <div id="subordinates">
        <Teammate
          pic={akshan}
          url={"https://www.tiktok.com/@ryuu.tv"}
          name={'Annie "Ryuu" Queen'}
          role={"CMO"}
        />
        <Teammate
          pic={rammus}
          url={"https://www.youtube.com/@HotSmiles"}
          name={'Joshua Arukisato "Arki" Sato'}
          role={"CFO"}
        />
        <Teammate
          pic={rammus}
          url={"https://www.twitch.tv/pilocase"}
          name={'Mr. Andrew "pilocase" Gamer'}
          role={"Senior Principal Executive Booster"}
        />
        <Teammate
          pic={rammus}
          url={"https://www.sporcle.com/user/Zukshin/"}
          name={'Ryan "Zukshin" Shin'}
          role={"Associate Booster"}
        />
        <Teammate
          pic={rammus}
          url={"https://steamcommunity.com/id/momono/"}
          name={'Bao Bao "dan tat" Alan'}
          role={"Associate Booster"}
        />
        <Teammate
          pic={rammus}
          url={"https://www.youtube.com/@chrik119"}
          name={'Chriktopher "LlTTLEST LEGEND" 119'}
          role={"Booster Intern"}
        />
        <Teammate
          pic={rammus}
          url={"https://www.deviantart.com/wndyxxox"}
          name={'Wnedy "Shuuri" Meishan'}
          role={"Booster Intern"}
        />
        <Teammate
          pic={rammus}
          url={"https://www.twitch.tv/hikarinyui"}
          name={'Emma-Lee "Alya" Marie'}
          role={"Booster Intern"}
        />
        <Teammate
          pic={rammus}
          url={"https://steamcommunity.com/id/momonobadgirltimeout"}
          name={'Just "Ammeck" n0k1'}
          role={"Onboarding"}
        />
      </div>
    </div>
  );
};

export default About;
