import "../styles/Review.css";
import HsinChao from "../assets/hsinchao.png";

const Review = () => {
  return (
    <div id="review">
      <img className="reviewPicture" src={HsinChao} />
      <div className="reviewName">Hsin Chao-Wen</div>
      <div className="reviewRating">5 stars</div>
      <div className="reviewDescription">
        Fate has made its choice. I may be outnumbered, but not even the odds
        can stand against me! To the arena!
      </div>
      <div></div>
    </div>
  );
};

export default Review;
