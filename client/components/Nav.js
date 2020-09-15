import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
    const navStyle = {
        color: 'white'
    }
    return (
        <nav>
            
            <ul className = "nav-links">
                <Link to="/about" style={navStyle}>
                    <li>About</li>
                </Link>
                <h3></h3>
                <Link to="/login" style={navStyle}>
                    <li>Log in</li>
                </Link>
                
                
            </ul>
        </nav>
    )
}

export default Nav;