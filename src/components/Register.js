import { useState } from "react";

import "../styles/Register.css";
const Register = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [allowSubmit, setAllowSubmit] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "https://www.twitch.tv/ryuu";
  };

  return (
    <div id="register">
      <form>
        <label>
          <div
            className="form-close"
            onClick={() => props.setShowRegister(false)}
          >
            x
          </div>
          <div className="form-dropdown">
            Type:
            <select
              value={props.selectedTier}
              onChange={(e) => props.setSelectedTier(e.target.value)}
            >
              <option value="basic">Basic</option>
              <option value="boosted">Boosted</option>
              <option value="boujee">Boujee</option>
            </select>
          </div>
          <div className="form-text">
            Riot ID:
            <textarea placeholder="soliloquyxx#NA1" />
          </div>
          <div className="form-dropdown">
            Desired Rank:
            <select value={props.selectedRank}>
              <option value="iron">Iron</option>
              <option value="bronze">Bronze</option>
              <option value="silver">Silver</option>
              <option value="gold">Gold</option>
              <option value="platinum">Platinum</option>
              <option value="emerald">Emerald</option>
              <option value="diamond">Diamond</option>
              <option value="master">Master</option>
              <option value="grandmaster">Grandmaster</option>
              <option value="challenger">Challenger</option>
            </select>
          </div>
          <div
            onClick={() => {
              return setAllowSubmit(!allowSubmit), setIsChecked(!isChecked);
            }}
          >
            <input type="checkbox" checked={isChecked} /> By checking this
            checkbox, I understand that all my lunch money belongs to Kylie Hsu
            and KBS Inc.
          </div>
        </label>
        <div className="form-submit">
          <input
            type="submit"
            value="Submit"
            disabled={allowSubmit}
            style={{
              backgroundColor: allowSubmit ? "darkgray" : "#d44a61",
              color: allowSubmit ? "lightgray" : "#ffe431",
            }}
            onClick={(e) => handleSubmit(e)}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
