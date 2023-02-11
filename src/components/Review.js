import "../styles/Review.css";

const Review = (props) => {
  return (
    <div id="review">
      <img className="review-picture" src={props.revPicture} />
      <div className="review-name">{props.revName}</div>
      <div className="review-rating">5 out of 5 stars</div>
      <div className="review-description">{props.revDesc}</div>
      <div></div>
    </div>
  );
};

export default Review;
