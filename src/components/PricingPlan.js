import "../styles/PricingPlan.css";

const PricingPlan = (props) => {
  return (
    <div id="pricing-plan">
      <div id="pp-type">{props.ppType}</div>
      <div id="pp-price">{props.ppPrice}</div>
      <div id="pp-priceper">per ranked tier</div>
      <div id="pp-description">{props.ppDesc}</div>
      <div id="pp-perks">{props.ppPerks}</div>
      <div id="pp-submit">
        <a href={"https://www.twitch.tv/ryuu"} target="_blank">
          <button>Boosted!</button>
        </a>
      </div>
    </div>
  );
};

export default PricingPlan;
