import React, { useState } from 'react';
import './Nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [showMenu, updateShowMenu] = useState(true);

    const handleHamburgerClick = () => {
        console. log('You Hit the Hamburger');
        
        let timbuktu;

        if (showMenu === true) {
            timbuktu = false;
        } else {
            timbuktu = true;
        }
        
        updateShowMenu(timbuktu);
        }
    


    return (
        <nav className='Nav'>

            <div 
            className="hamburger" onClick={ handleHamburgerClick }>
                <FontAwesomeIcon icon={ faBars } />
            </div>
            {
                showMenu &&
                <div className="links">
                    <a href="#">Welcome</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
            }

        </nav>
    )
};

export default Nav;