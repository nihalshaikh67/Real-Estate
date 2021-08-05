import React from 'react';
import logo1 from'../images/logo1.png';

const Navbar = () => {
    return (
        <nav>
            <a href="#" className="logo">
                <img src={logo1} alt=""/>
            </a>
            <input className="menu-btn" type="checkbox" id="menu-btn"/>
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Agents</a></li>
                <li><a href="#">Proporty</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <a href="#" className="proporty">Proporties</a>
        </nav>
    )
}

export default Navbar;
