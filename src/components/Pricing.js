import React from "react";
import PricingPlan from "../components/PricingPlan";
import "../styles/Pricing.css";

const ppPerks = ["get to your desired rank"];

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
              <div className="pricing-perk">{ppPerks[0]}</div>
              <div className="pricing-perk pricing-perk-disabled">
                receive coaching from one of our certified KBS boosters
              </div>
              <div className="pricing-perk pricing-perk-disabled">
                Consultation and coaching from our CEO Kylie Hsu in and out of
                the rift
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
              <div className="pricing-perk">get to your desired rank</div>
              <div className="pricing-perk">
                receive coaching from one of our certified KBS boosters
              </div>
              <div className="pricing-perk pricing-perk-disabled">
                Consultation and coaching from our CEO Kylie Hsu in and out of
                the rift
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
              <div className="pricing-perk">get to your desired rank</div>
              <div className="pricing-perk">
                receive coaching from one of our certified KBS boosters
              </div>
              <div className="pricing-perk">
                Consultation and coaching from our CEO Kylie Hsu in and out of
                the rift
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Pricing;
