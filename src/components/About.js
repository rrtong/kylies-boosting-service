import React from "react";
import Teammate from "../components/Teammate";
import sweepershinchan from "../assets/sweepershinchan.png";
import "../styles/About.css";

const About = () => {
  return (
    <div id="about">
      <div className="title">meet the team!</div>
      <div>
        <Teammate
          pic={sweepershinchan}
          url={"https://www.twitch.tv/soliloquyxx"}
          name={'Kylie Chao-wen "quyxx" Hsu'}
          role={"CEO"}
        />
      </div>
      <div id="subordinates">
        <Teammate
          pic={
            "https://cdn.discordapp.com/guilds/948856567871209472/users/746233231405482015/avatars/e8dd49823d6918205610e1f517a3cbcd.webp?size=256"
          }
          url={"https://www.tiktok.com/@ryuu.tv"}
          name={'Annie "Ryuu" Queen'}
          role={"CMO"}
        />
        <Teammate
          pic={
            "https://cdn.discordapp.com/avatars/270431140056268800/0c01c6a69cbbc12feb2c8906aa4349be.webp?size=256"
          }
          url={"https://www.youtube.com/@HotSmiles"}
          name={'Joshua Arukisato "Arki" Sato'}
          role={"CFO"}
        />
        <Teammate
          pic={
            "https://cdn.discordapp.com/guilds/948856567871209472/users/190566141507141632/avatars/f7fdfc13b7f85241e1e639409829d6de.webp?size=256"
          }
          url={"https://www.twitch.tv/pilocase"}
          name={'Mr. Andrew "pilocase" Gamer'}
          role={"Senior Principal Executive Booster"}
        />
        <Teammate
          pic={
            "https://cdn.discordapp.com/guilds/948856567871209472/users/109127630766239744/avatars/82e033c426509a301f8f6749d7bfb30b.webp?size=256"
          }
          url={"https://www.sporcle.com/user/Zukshin/"}
          name={'Ryan "Zukshin" Shin'}
          role={"Associate Booster"}
        />
        <Teammate
          pic={
            "https://cdn.discordapp.com/avatars/164081559673110528/ac8ed4bb9f55ce6bc310641da3889ebc.webp?size=256"
          }
          url={"https://steamcommunity.com/id/momono/"}
          name={'Bao Bao "dan tat" Alan'}
          role={"Associate Booster"}
        />
        <Teammate
          pic={
            "https://cdn.discordapp.com/avatars/264567216698032139/2c12048d635854d4317d392cfdc680ec.webp?size=256"
          }
          url={"https://www.youtube.com/@chrik119"}
          name={'Chriktopher "LlTTLEST LEGEND" 119'}
          role={"Booster Intern"}
        />
        <Teammate
          pic={
            "https://cdn.discordapp.com/avatars/444363277787725834/9777cd4a7ee3ca4ac0ebe71866daf1d5.webp?size=256"
          }
          url={"https://www.deviantart.com/wndyxxox"}
          name={'Wnedy "Shuuri" Meishan'}
          role={"Booster Intern"}
        />
        <Teammate
          pic={
            "https://cdn.discordapp.com/guilds/948856567871209472/users/190657628928606208/avatars/4c3611a8248c1cd021f42d8a161343dd.webp?size=256"
          }
          url={"https://www.twitch.tv/hikarinyui"}
          name={'Emma-Lee "Alya" Marie'}
          role={"Booster Intern"}
        />
        <Teammate
          pic={
            "https://cdn.discordapp.com/avatars/330254340482793472/bf1e0ba20c9c89e9960b6a9de33b9086.webp?size=256"
          }
          url={"https://steamcommunity.com/id/momonobadgirltimeout"}
          name={'Just "Ammeck" n0k1'}
          role={"Onboarding"}
        />
      </div>
    </div>
  );
};

export default About;
