import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";


import './Sidebar.css';

const Sidebar = ({closeDrawer}) => {
    return (
        <div className="SidebarContainer" onClick={closeDrawer}>
            <div className="Icon">
                <div className="CloseIcon">X</div>
            </div>
            <div className="SidebarMenu">
                <NavLink to='/restaurants' className="SidebarLink">Find Best Resturants Near You</NavLink>
                <Link to='/' className="SidebarLink">Desserts</Link>
                <Link to='/' className="SidebarLink">Full Menu</Link>
            </div>
            <div className="SideBtnWrap">
                <Link to='/' className="SidebarRoute">Order Now</Link>
            </div>
        </div>
    )
}

export default Sidebar;
