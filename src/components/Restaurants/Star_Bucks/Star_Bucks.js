import React from "react";
import { NavLink } from "react-router-dom";

import "./Star_Bucks.css";

const Star_Bucks = () => {
  return (
    <div className="LachaJee_card">
      <div className="LachaJee"></div>
      <div className="LachaJee_info">
        <NavLink to="/restaurants/starbucks" className="LachaJee_Heading1">
          Star Bucks
        </NavLink>
        <div className="LachaJee_Heading2">
          Best deals for "Easy Food Delivery" website users only!
        </div>
        <div className="LachaJee_Footer">*Upto 50% discount</div>
      </div>
    </div>
  );
};

export default Star_Bucks;
