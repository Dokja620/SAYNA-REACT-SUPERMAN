import React from "react";
import { NavLink } from "react-router-dom";
import navLogo from '../assets/logos/logo_blanc.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo"><img src={navLogo} alt="" /></div>
            <div className="nav-links">
                <ul>
                    <li><NavLink to="home" className="links-home">HOME</NavLink></li>
                    <li><NavLink to="e-shop" className="links-home">E-SHOP</NavLink></li>
                    <li><NavLink to="account" className="links-home">MON COMPTE</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;