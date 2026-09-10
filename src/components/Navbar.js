import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import logo from '../assets/knlogo.png';

import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      path: '/',
      label: 'Wellness Hub',
    },
    {
      path: '/about',
      label: 'Meet Kavya',
    },
    {
      path: '/reviews',
      label: 'Success Stories',
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* =========================
            LOGO
        ========================== */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="Kavya's Nutrition Home"
        >
          <img
            src={logo}
            alt="Kavya's Nutrition"
          />
        </Link>


        {/* =========================
            DESKTOP / MOBILE NAV
        ========================== */}
        <nav
          className={`nav-links ${menuOpen ? 'open' : ''}`}
          aria-label="Main navigation"
        >

          {navItems.map(({ path, label }) => {
            const isActive = location.pathname === path;

            return (
              <Link
                key={path}
                to={path}
                className={isActive ? 'nav-link active' : 'nav-link'}
                onClick={closeMenu}
              >
                {label}
              </Link>
            );
          })}


          {/* Book Session CTA */}
          <Link
            to="/contact"
            className={
              location.pathname === '/contact'
                ? 'nav-cta active'
                : 'nav-cta'
            }
            onClick={closeMenu}
          >
            <span>Book a Session</span>
            <span className="cta-arrow">→</span>
          </Link>

        </nav>


        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </button>

      </div>
    </header>
  );
};

export default Navbar;