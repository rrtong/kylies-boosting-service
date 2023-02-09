import React from "react";
import Review from "../components/Review";
import "../styles/Reviews.css";
import HsinChao from "../assets/hsinchao.png";

const Reviews = () => {
  return (
    <div id="reviews">
      <div className="title">Our satisfied boostees</div>
      <div id="reviewCarousel">
        <Review reviewPicture={HsinChao} />
        <Review reviewPicture={HsinChao} />
        <Review reviewPicture={HsinChao} />
        <Review reviewPicture={HsinChao} />
        <Review reviewPicture={HsinChao} />
        <Review reviewPicture={HsinChao} />
        <Review reviewPicture={HsinChao} />
        <Review reviewPicture={HsinChao} />
      </div>
    </div>
  );
};

export default Reviews;
