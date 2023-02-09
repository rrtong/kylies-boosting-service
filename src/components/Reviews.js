import React from "react";
import Review from "../components/Review";
import "../styles/Reviews.css";

const Reviews = () => {
  return (
    <div id="reviews">
      <div className="title">Our satisfied boostees</div>
      <div id="reviewCarousel">
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default Reviews;
