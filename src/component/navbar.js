import React, { useState, useEffect } from 'react'
import { NavLink, Link } from "react-router-dom";
// import PropTypes from 'prop-types'
import Logo from 'assets/images/logoM.png';

import { Header } from 'data/data';

export default function Navbar() {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);


    //scroll position



    const handleScroll = () => {
        // find current scroll position
        const currentScrollPos = window.pageYOffset;

        // set state based on location info (explained in more detail below)
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

        // set state to new scroll position
        setPrevScrollPos(currentScrollPos);
    };

    // new useEffect:
    useEffect(() => {
        const event = window.addEventListener('scroll', handleScroll);

        if (visible && event >= 50) {
            setVisible(true);
        }

    }, [prevScrollPos, visible, handleScroll]);




    return (
        <>
            <nav className={visible == true ? " navbar navbar-expand-lg bg-transparent" : " navbar navbar-expand-lg bg-light navbar-light shadow fixed-top"} >
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={Logo} alt="logo" width={50} height={40} className="mx-2 img-responsive" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {Header.map((header, key) =>
                                <li className="nav-item">
                                    <NavLink key={key} to={header.to} activeclassname="active" className="nav-link">{header.title}</NavLink>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


