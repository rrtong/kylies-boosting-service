import "../styles/Review.css";

const Review = (revProps) => {
  return (
    <div id="review">
      <img className="reviewPicture" src={revProps.reviewPicture} />
      <div className="reviewName">Hsin Chao-Wen</div>
      <div className="reviewRating">5 out of 5 stars</div>
      <div className="reviewDescription">
        Fate has made its choice. I may be outnumbered, but not even the odds
        can stand against me! To the arena!
      </div>
      <div></div>
    </div>
  );
};

export default Review;
