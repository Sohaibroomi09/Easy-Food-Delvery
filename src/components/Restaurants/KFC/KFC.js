import React from "react";
import { NavLink } from 'react-router-dom';

import './KFC.css';

const KFC = () => {
  return (
    <div className="KFC_card">
      <div className="KFC"></div>
      <div className="KFC_info">
        <NavLink to="/restaurants/kfc" className="KFC_Heading1">
          KFC
        </NavLink>
        <div className="KFC_Heading2">
          Best deals for "Easy Food Delivery" website users only!
        </div>
        <div className="KFC_Footer">*Upto 50% discount</div>
      </div>
    </div>
  );
};

export default KFC;
