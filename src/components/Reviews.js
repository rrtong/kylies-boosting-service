import React from "react";
import Review from "../components/Review";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HsinChao from "../assets/hsinchao.png";
import annifan from "../assets/annifan.png";
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
          revPicture={annifan}
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
          revDesc={"Day breaks upon the battlefield! I must not fall."}
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
            "Fate has made its choice. Lorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem Lorem I may be outnumbered, but not even the odds can stand against me! To the arena!"
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
