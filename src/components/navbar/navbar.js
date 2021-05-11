import React from 'react';
import './navbar.css';

const Navbar = () => {
    return(
        <div className="outer-nav">
            <div className="inner-nav">
                <h1>Covid-Dashboard</h1>
                <h3></h3>
                <h3>Home</h3>
                <h3>Hospitals</h3>
                <h3>Ambulance</h3>
            </div>
        </div>
    )
}

export default Navbar;