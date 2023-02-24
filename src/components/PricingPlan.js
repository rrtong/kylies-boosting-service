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
        <button
          onClick={() => {
            props.setShowRegister(!props.showRegister);
            props.setSelectedTier(props.ppType.toLowerCase());
          }}
        >
          Boosted!
        </button>
      </div>
    </div>
  );
};

export default PricingPlan;
