import React from 'react';
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <header className="p-3 mb-5 bg-info">

            <div className="container">
                <nav className="mt-3">
                    <Link to="/" className="logo text-white">PokeApi</Link>
                    <div className="top-menu">
                        <Link className="menu-item text-white" to="/">Home</Link>
                        <Link className="menu-item text-white" to="/about">About</Link>
                    </div>
                </nav>
            </div>

        </header>
    );
};

export default Header;