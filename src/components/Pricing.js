import React from "react";
import PricingPlan from "../components/PricingPlan";
import "../styles/Pricing.css";

const ppPerks = [
  "Achieve your desired rank",
  "Coaching from one of our certified KBS boosters",
  "Consultation and coaching from our CEO Kylie Hsu in and off the rift",
  "Boost your Legendary Rank up to Commander III",
];

const Pricing = (props) => {
  return (
    <div id="pricing">
      <div className="title">our boosting plans!</div>
      <div id="plans">
        <PricingPlan
          ppType={"Basic"}
          ppPrice={"NT$3,000"}
          ppDesc={"if u have no money"}
          ppPerks={
            <div className="pricing-perks">
              <div className="pricing-perk">✓ {ppPerks[0]}</div>
              <div className="pricing-perk pricing-perk-disabled">
                ✗ {ppPerks[1]}
              </div>
              <div className="pricing-perk pricing-perk-disabled">
                ✗ {ppPerks[2]}
              </div>
            </div>
          }
          showRegister={props.showRegister}
          setShowRegister={props.setShowRegister}
        />
        <PricingPlan
          ppType={"Boosted"}
          ppPrice={"NT$15,000"}
          ppDesc={"if u want more"}
          ppPerks={
            <div className="pricing-perks">
              <div className="pricing-perk">✓ {ppPerks[0]}</div>
              <div className="pricing-perk">✓ {ppPerks[1]}</div>
              <div className="pricing-perk pricing-perk-disabled">
                ✗ {ppPerks[2]}
              </div>
            </div>
          }
          showRegister={props.showRegister}
          setShowRegister={props.setShowRegister}
        />
        <PricingPlan
          ppType={"Boujee"}
          ppPrice={"NT$60,000"}
          ppDesc={"if u own china"}
          ppPerks={
            <div className="pricing-perks">
              <div className="pricing-perk">
                ✓ {ppPerks[0]} within one ranked season
              </div>
              <div className="pricing-perk">✓ {ppPerks[3]}</div>
              <div className="pricing-perk">✓ {ppPerks[1]}</div>
              <div className="pricing-perk">✓ {ppPerks[2]}</div>
            </div>
          }
          showRegister={props.showRegister}
          setShowRegister={props.setShowRegister}
        />
      </div>
    </div>
  );
};

export default Pricing;
