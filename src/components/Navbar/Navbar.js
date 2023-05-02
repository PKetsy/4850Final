import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.png';

import './Navbar.css';

const Navbar = () => {
  const [activePage, setActivePage] = useState('/');

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, []);

  const handleNavLinkClick = (page) => {
    setActivePage(page);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} width="100" height="100" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              The Fruit Stand & Seafood
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a
                  className={`nav-link ${activePage === '/' ? 'active' : ''}`}
                  href="/"
                  onClick={() => handleNavLinkClick('/')}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activePage === '/menu' ? 'active' : ''
                  }`}
                  href="/menu"
                  onClick={() => handleNavLinkClick('/menu')}
                >
                  Menu
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activePage === '/events' ? 'active' : ''
                  }`}
                  href="/events"
                  onClick={() => handleNavLinkClick('/events')}
                >
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activePage === '/about' ? 'active' : ''
                  }`}
                  href="/about"
                  onClick={() => handleNavLinkClick('/about')}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activePage === '/contact' ? 'active' : ''
                  }`}
                  href="/contact"
                  onClick={() => handleNavLinkClick('/contact')}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activePage === '/Delivery' ? 'active' : ''
                  }`}
                  href="/Delivery"
                  onClick={() => handleNavLinkClick('/Delivery')}
                >
                  Delivery FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
