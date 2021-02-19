import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(propos) {
    return (
        <div>
            <div className="navbar">
                <div className="logo">JOSEPH <br></br><span>ANDRE</span></div>
                <ul className="menu">
                    <li className="nav-link"><NavLink to="/" activeClassName="selected">Home</NavLink></li>
                    <li  className="nav-link"><NavLink to="/projects">Projects</NavLink></li>
                    <li  className="nav-link"><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
