import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="FooterWrap">
        <div className="SocialMedia">
          <Link className="SocialMediaWrap">
            <div className="SocialLogo">Easy Food Delivery</div>
            <div className="SocialIcons">
              <div
                className="SocialIconLink"
                href="/"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                Facebook
              </div>
              <div
                className="SocialIconLink"
                href="/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                Instagram
              </div>
              <div
                className="SocialIconLink"
                href="/"
                target="_blank"
                aria-label="Label"
                rel="noopener noreferrer"
              >
                Twitter
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
