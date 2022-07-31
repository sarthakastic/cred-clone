import React from "react";
import Button from "./common/Button";
import "./landing.css"
const Landing = () => {
  return (
    <div className="landing-wrapper">
      <div className="flex absolute-center claim-label">
              <div>pay credit card bill. earn guaranteed ₹200 back. </div>
              <div className="claim-anchor">
                 claim now<img className="claim-arrow" src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png" alt="arrow" />
              </div>

      </div>
      <div className="flex absolute-center flex-col landing max-width">
        <div className="heading">rewards for paying credit card bills.</div>
        <div className="subheading">
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <Button buttonText="Download CRED"/>
      </div>
    </div>
  );
};

export default Landing;
