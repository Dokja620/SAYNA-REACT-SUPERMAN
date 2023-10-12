import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
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