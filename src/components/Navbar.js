import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Kavya’s.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    cursor: 'pointer',
  };

  const handleHover = (e, isHovering) => {
    e.target.style.background = isHovering ? '#a5d6a7' : 'transparent';
    e.target.style.transform = isHovering ? 'scale(1.05)' : 'scale(1)';
  };

  // Toggle the menu visibility on logo click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav style={navStyle}>
      {/* Left Logo */}
      <div onClick={toggleMenu}>
        <img src={logo} alt="Vital Vibes Logo" style={logoStyle} />
      </div>

      {/* Navigation Links */}
      <div
        style={{
          ...linkContainerStyle,
          position: 'absolute',
          top: '70px',
          left: 0,
          right: 0,
          backgroundColor: '#c8e6c9',
          display: isMenuOpen ? 'block' : 'none',
          padding: '1rem',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          zIndex: 999,
        }}
      >
        {[{ path: '/', label: 'Home' }, { path: '/about', label: 'About' }, { path: '/reviews', label: 'Reviews' }, { path: '/contact', label: 'Contact Me' }].map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            style={linkStyle}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
            onClick={handleLinkClick}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
