import React from "react";
import Teammate from "../components/Teammate";
import sweepershinchan from "../assets/sweepershinchan.png";
import rammus_alab from "../assets/rammus.png";
import rammus_arki from "../assets/rammus_arki.jpg";
import rammus_chrik from "../assets/rammus_chrik.png";
import rammus_ryan from "../assets/rammus_ryan.png";
import rammus_frank from "../assets/rammus_frank.png";
import rammus_reanemone from "../assets/rammus_reanemone.png";
import rammus_ammeck from "../assets/rammus_ammeck.png";
import rammus_alya from "../assets/rammus_alya.png";
import rammus_wnedy from "../assets/rammus_wnedy.png";
import rammus_ryuu from "../assets/rammus_ryuu.png";
import rammus_pilocase from "../assets/rammus_pilocase.png";

import "../styles/About.css";

const About = () => {
  return (
    <div id="about">
      <div className="title">meet the team!</div>
      <div>
        <Teammate
          pic={sweepershinchan}
          url={"https://www.neopets.com/userlookup.phtml?user=soliloquyxx"}
          name={'Kylie Chao-wen "quyxx" Hsu'}
          role={"CEO"}
        />
      </div>
      <div id="subordinates">
        <Teammate
          pic={rammus_ryuu}
          url={"https://www.tiktok.com/@ryuu.tv"}
          name={'Annie "Ryuu" Queen'}
          role={"CMO"}
        />
        <Teammate
          pic={rammus_arki}
          url={"https://www.youtube.com/@HotSmiles"}
          name={'Joshua Arukisato "Arki" Sato'}
          role={"CFO"}
        />
        <Teammate
          pic={rammus_pilocase}
          url={"https://www.twitch.tv/pilocase"}
          name={'Mr. Andrew "pilocase" Gamer'}
          role={"Senior Principal Executive Booster"}
        />
        <Teammate
          pic={rammus_alab}
          url={"https://steamcommunity.com/id/momono/"}
          name={'Bao Bao "dan tat" Alan'}
          role={"Booster"}
        />
        <Teammate
          pic={rammus_ryan}
          url={"https://www.sporcle.com/user/Zukshin/"}
          name={'Ryan "Zukshin" Shin'}
          role={"Associate Booster"}
        />
        <Teammate
          pic={rammus_frank}
          url={"https://apexlegendsstatus.com/profile/PC/uchiha1xmadara"}
          name={'Franklin "Guts" Uchiha'}
          role={"Associate Booster"}
        />
        <Teammate
          pic={rammus_chrik}
          url={"https://www.youtube.com/@chrik119"}
          name={'Chriktopher "LlTTLEST LEGEND" 119'}
          role={"Booster Intern"}
        />
        <Teammate
          pic={rammus_wnedy}
          url={"https://www.deviantart.com/wndyxxox"}
          name={'Wnedy "Shuuri" Meishan'}
          role={"Booster Intern"}
        />
        <Teammate
          pic={rammus_ammeck}
          url={"https://steamcommunity.com/id/momonobadgirltimeout"}
          name={'Just "Ammeck" n0k1'}
          role={"Booster Intern"}
        />
        <Teammate
          pic={rammus_alya}
          url={"https://www.twitch.tv/hikarinyui"}
          name={'Emma-Lee "Alya" Marie'}
          role={"Booster Intern"}
        />
        <Teammate
          pic={rammus_reanemone}
          url={"https://ca.pinterest.com/reanemone/"}
          name={'Reanna "Reanemone" Money'}
          role={"Onboarding"}
        />
      </div>
    </div>
  );
};

export default About;
