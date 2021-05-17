import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import NavbarElements from '../Navbar/NavbarElements'
import Sidebar from '../Sidebar/Sidebar';


import './Hero.css';

const Hero = () => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true);
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false);
    }

    return (
        <div className="HeroContainer">
            <NavbarElements openDrawer={openDrawer}/>
            {drawerIsOpen ? (<Sidebar closeDrawer={closeDrawer} />) : null}
            <div className="HeroContent">
                <div className="HeroItems">
                    <div className="HeroH1">Best Food Deals in Town!!!</div>
                    <div className="HeroP">We deliver the food you love</div>    
                    <nav className="HeroBtn">
                        <NavLink to="/restaurants">Place Order</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Hero
