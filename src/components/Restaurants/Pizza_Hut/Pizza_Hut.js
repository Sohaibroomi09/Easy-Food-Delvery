import React from "react";
import { NavLink } from 'react-router-dom';

import './Pizza_Hut.css';

const Pizza_Hut = () => {
  return (
    <div className="PizzaHut_card">
      <div className="PizzaHut"></div>
      <div className="PizzaHut_info">
        <NavLink to="/restaurants/pizzahut" className="PizzaHut_Heading1">
          Pizza Hut
        </NavLink>
        <div className="PizzaHut_Heading2">
          Best deals for "Easy Food Delivery" website users only!
        </div>
        <div className="PizzaHut_Footer">*Upto 50% discount</div>
      </div>
    </div>
  );
};

export default Pizza_Hut;
