import React from "react";
import { NavLink } from "react-router-dom";

import "./Burger_King.css";

const Burger_King = () => {
  return (
    <div className="BurgerKing_card">
      <div className="BurgerKing"></div>
      <div className="BurgerKing_info">
        <NavLink to="/restaurants/burgerking" className="BurgerKing_Heading1">
          Burger King
        </NavLink>
        <div className="BurgerKing_Heading2">
          Best deals for "Easy Food Delivery" website users only!
        </div>
        <div className="BurgerKing_Footer">*Upto 50% discount</div>
      </div>
    </div>
  );
};

export default Burger_King;
