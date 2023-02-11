import React from "react";
import PricingPlan from "../components/PricingPlan";
import "../styles/Pricing.css";

const ppPerks = [
  "Achieve your desired rank",
  "Coaching from one of our certified KBS boosters",
  "Consultation and coaching from our CEO Kylie Hsu in and off the rift",
];

const Pricing = () => {
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
        />
        <PricingPlan
          ppType={"Boosted"}
          ppPrice={"NT$15,000"}
          ppDesc={"if u want something more"}
          ppPerks={
            <div className="pricing-perks">
              <div className="pricing-perk">✓ {ppPerks[0]}</div>
              <div className="pricing-perk">✓ {ppPerks[1]}</div>
              <div className="pricing-perk pricing-perk-disabled">
                ✗ {ppPerks[2]}
              </div>
            </div>
          }
        />
        <PricingPlan
          ppType={"Boujee"}
          ppPrice={"NT$60,000"}
          ppDesc={"if u own china"}
          ppPerks={
            <div className="pricing-perks">
              <div className="pricing-perk">✓ {ppPerks[0]}</div>
              <div className="pricing-perk">✓ {ppPerks[1]}</div>
              <div className="pricing-perk">✓ {ppPerks[2]}</div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Pricing;
