import React from 'react';
import './styles.css';

const Header = () => (
    <header id="main-header">
        <h1>SW Universe</h1>
        <nav>
            <label className="hamburguer-menu" htmlFor="menu-checkbox">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </nav>
    </header>
);

export default Header;