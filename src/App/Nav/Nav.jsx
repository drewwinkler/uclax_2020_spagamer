import React from 'react';
import './Nav.scss';

const Nav = () => {
    return (
        <nav className='Nav'>

            <div className="hamburger">Hamburger</div>

            <div className="links">
                <a href="#">Welcome</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>

        </nav>
    )
};

export default Nav;