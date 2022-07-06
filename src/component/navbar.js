import React from 'react'
import { NavLink, Link } from "react-router-dom";
// import PropTypes from 'prop-types'
import Logo from 'assets/images/logov2.png';

import { Header } from 'data/data';
import PropsTypes from 'prop-types';

export default function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="logo" width={100} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {Header.map((header, key) =>
                                <li className="nav-item">
                                    <NavLink key={key} to={header.to} activeClassName="active" className="nav-link">{header.title}</NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


