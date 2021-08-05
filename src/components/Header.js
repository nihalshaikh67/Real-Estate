import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="header">
            <Navbar/>
            <div className="intro">
                <p>Looking for Proporty !</p>
                <h1><span> Buy</span> and<span> Sell</span> Proporties</h1>
                <p className="details">lorem i[psum dolor mwn dlkgldkgn consyt a;pdjdjd laobor . inut lorgf fgsbvrt efjnejlf wjrejrd;e jefjre;jfd;ew batrifjf enfelfnel efejflejf</p>
                <a href="#" className="header-btn">Details</a>
            </div>
        </div>
    )
}

export default Header;
