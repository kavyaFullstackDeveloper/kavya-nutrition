import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/knlogo.png'; 
import { FaBars, FaTimes } from 'react-icons/fa'; // For the hamburger icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // To toggle menu visibility

  const navStyle = {
    padding: '1rem 2rem',
    background: '#c8e6c9',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Segoe UI', sans-serif",
  };

  const linkContainerStyle = {
    display: 'flex',
    gap: '1.5rem',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#2e7d32',
    fontWeight: '600',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease-in-out',
    padding: '0.5rem 1rem',
    borderRadius: '10px',
  };

  const logoStyle = {
    height: '50px',
    objectFit: 'contain',
  };

  const handleHover = (e, isHovering) => {
    e.target.style.background = isHovering ? '#a5d6a7' : 'transparent';
    e.target.style.transform = isHovering ? 'scale(1.05)' : 'scale(1)';
  };

  // Toggle the menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav style={navStyle}>
      {/* Left Logo */}
      <Link to="/">
        <img src={logo} alt="Vital Vibes Logo" style={logoStyle} />
      </Link>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu} style={{ display: 'none' }}>
        <FaBars size={30} />
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? 'open' : ''}`} style={linkContainerStyle}>
        {[ 
          { path: '/', label: 'Home' },
          { path: '/about', label: 'About' },
          { path: '/reviews', label: 'Reviews' },
          { path: '/contact', label: 'Contact Me' },
        ].map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            style={linkStyle}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile View: Close Icon */}
      <div className="close-menu" onClick={toggleMenu} style={{ display: 'none' }}>
        <FaTimes size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
