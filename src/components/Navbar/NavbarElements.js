import React from "react";
import { NavLink } from "react-router-dom";

import "./NavbarElements.css";

const NavbarElements = ({openDrawer}) => {
  return (
    <div className="Nav">
        <NavLink className="NavLink" to="/">Easy Food Delivery</NavLink>
        <div className="NavIcon" onClick={openDrawer} >

        <div className="NavBtnWrap">
                <NavLink to='/' className="SidebarRoute">Order</NavLink>
            </div>
        </div>
    </div>
  );
};

export default NavbarElements;
