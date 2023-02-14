import React from "react";
import Review from "../components/Review";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HsinChao from "../assets/hsinchao.png";
import yordleexpedition from "../assets/yordleexpedition.png";
import keria from "../assets/keria.png";
import maozedong from "../assets/maozedong.png";
import "../styles/Reviews.css";

const Reviews = () => {
  return (
    <div id="reviews">
      <div className="title">Our satisfied boostees</div>
      <div id="review-carousel">
        <Review
          revPicture={HsinChao}
          revName={"Hsin Chao-wen 趙信文"}
          revRating={
            <div>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          }
          revDesc={
            "Fate has made its choice. I may be outnumbered, but not even the odds can stand against me! To the arena!"
          }
        />
        <Review
          revPicture={yordleexpedition}
          revName={"Fan Anni"}
          revRating={
            <div>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          }
          revDesc={"好。"}
        />
        <Review
          revPicture={keria}
          revName={"류민석 Keria"}
          revRating={
            <div>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          }
          revDesc={
            "알수 없는 신비의 존재 람머스. 누군가에게는 숭배의 대상이고, 또 누군가에게는 경외의 대상인 우상과도 같은 인물. 더러는 우리와 똑같은 인간으로 여겨지는 경우도 있다. 하지만 한 가지 분명한 것은 그 누구도 람머스의 정체를 제대로 알지 못한다는 것. 베일에 가려진 수수께끼의 존재라는 사실이다. 뾰족한 못이 박힌 갑옷을 입고 다니는 그를 두고 사람들은 여러가지 추측을 내놓는다. 반신반인의 존재라느니, 신성한 사제라느니, 마술에 걸린 야수일 뿐이라는 얘기까지 무척이나 다양하다. 그러나 진실이 무엇이든, 사막을 배회하며 뭐든지 제 생각대로 해버리고 마는 람머스의 의지를 꺾을 자는 아무도 없다."
          }
        />
        <Review
          revPicture={maozedong}
          revName={"Mao Ze Dong 2g"}
          revRating={
            <div>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          }
          revDesc={
            "许多人对其崇拜敬仰，少数人对其嗤之以鼻，但所有人都对其一无所知。奇怪而有趣的生物拉莫斯就是一个谜团。他全身覆盖尖刺硬壳，人们对他的出身来历的猜测层出不穷——有人说他是半神，有人说他是神谕者，有人说他只是普通的野兽，遭遇了魔法的影响而发生彻底变异。无论真相如何，拉莫斯始终都默不作声，而且不会为任何人停留，永远都在恕瑞玛的沙漠中奔走游荡。"
          }
        />
        <Review
          revPicture={HsinChao}
          revName={"Hsin Chao-wen 趙信文"}
          revRating={
            <div>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          }
          revDesc={
            "Fate has made its choice. I may be outnumbered, but not even the odds can stand against me! To the arena!"
          }
        />
        <Review
          revPicture={HsinChao}
          revName={"Hsin Chao-wen 趙信文"}
          revRating={
            <div>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          }
          revDesc={
            "Fate has made its choice. I may be outnumbered, but not even the odds can stand against me! To the arena!"
          }
        />
        <Review
          revPicture={HsinChao}
          revName={"Hsin Chao-wen 趙信文"}
          revRating={
            <div>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          }
          revDesc={
            "Fate has made its choice. I may be outnumbered, but not even the odds can stand against me! To the arena!"
          }
        />
        <Review
          revPicture={HsinChao}
          revName={"Hsin Chao-wen 趙信文"}
          revRating={
            <div>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          }
          revDesc={
            "Fate has made its choice. I may be outnumbered, but not even the odds can stand against me! To the arena!"
          }
        />
      </div>
    </div>
  );
};

export default Reviews;
