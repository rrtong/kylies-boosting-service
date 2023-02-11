import React from "react";
import Review from "../components/Review";
import "../styles/Reviews.css";
import HsinChao from "../assets/hsinchao.png";
import annifan from "../assets/annifan.png";

const Reviews = () => {
  return (
    <div id="reviews">
      <div className="title">Our satisfied boostees</div>
      <div id="review-carousel">
        <Review
          revPicture={HsinChao}
          revName={"Hsin Chao-Wen"}
          revDesc={
            "Fate has made its choice. I may be outnumbered, but not even the odds can stand against me! To the arena!"
          }
        />
        <Review
          revPicture={annifan}
          revName={"Fan Anni"}
          revDesc={"Day breaks upon the battlefield! I must not fall."}
        />
        <Review
          revPicture={HsinChao}
          revName={"Hsin Chao-Wen"}
          revDesc={
            "Fate has made its choice. I may be outnumbered, but not even the odds can stand against me! To the arena!"
          }
        />
        <Review
          revPicture={HsinChao}
          revName={"Hsin Chao-Wen"}
          revDesc={
            "Fate has made its choice. I may be outnumbered, but not even the odds can stand against me! To the arena!"
          }
        />
        <Review
          revPicture={HsinChao}
          revName={"Hsin Chao-Wen"}
          revDesc={
            "Fate has made its choice. I may be outnumbered, but not even the odds can stand against me! To the arena!"
          }
        />
        <Review
          revPicture={HsinChao}
          revName={"Hsin Chao-Wen"}
          revDesc={
            "Fate has made its choice. I may be outnumbered, but not even the odds can stand against me! To the arena!"
          }
        />
        <Review
          revPicture={HsinChao}
          revName={"Hsin Chao-Wen"}
          revDesc={
            "Fate has made its choice. I may be outnumbered, but not even the odds can stand against me! To the arena!"
          }
        />
        <Review
          revPicture={HsinChao}
          revName={"Hsin Chao-Wen"}
          revDesc={
            "Fate has made its choice. I may be outnumbered, but not even the odds can stand against me! To the arena!"
          }
        />
      </div>
    </div>
  );
};

export default Reviews;
