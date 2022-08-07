import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);
  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
  };
  return (
    <div className="mobile-menu-wrapper">
        <div className={`mobile-menu only-mobile ${showMobMenu? "overlay" : ""}`}>

            <div className="mob-navbar">
            <div className="mob-nav-item">credit score check</div>
          <div className="mob-nav-item">credit card bill payment</div>
          

            </div>
        </div>


      <div className="flex max-width header">
        <img
          className="header-logo"
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          alt="creds-logo"
        />

        <div className="only-mobile mobile-menu-button-wrapper">
          <button
            className={`hamburger hamburger--spin 
        ${showMobMenu ? "is-active" : ""} `}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <div className="nav-item">credit score check</div>
          <div className="nav-item">credit card bill payment</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
