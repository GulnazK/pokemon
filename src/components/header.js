import React from 'react';
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <header className="p-1 mb-5 bg-danger">

            <div className="container">
                <nav className="header-box mt-4">
                    <Link to="/" className="pokemon-title text-white">POKEMON</Link>
                    <div className="top-menu">
                        <Link className="nav-title text-white" to="/">Home</Link>
                    </div>
                </nav>
            </div>

        </header>
    );
};

export default Header;