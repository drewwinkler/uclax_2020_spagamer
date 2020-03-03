// Node Packages do not need relative paths
import React from 'react';
import './Header.scss'; // another note

// This is my component
const Header = () => {
    return (
        <header className={'Header'}>My Component Header</header>
    );
}

// Every component must be exported
export default Header;