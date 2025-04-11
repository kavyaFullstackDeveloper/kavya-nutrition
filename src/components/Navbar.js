import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/knlogo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const updateMobile = () => setIsMobile(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener('resize', updateMobile);
    return () => window.removeEventListener('resize', updateMobile);
  }, []);

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

  const logoStyle = {
    height: '50px',
    objectFit: 'contain',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#2e7d32',
    fontWeight: '600',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease-in-out',
    padding: '0.5rem 1rem',
    borderRadius: '10px',
    display: 'block',
  };

  const menuStyle = {
    display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '1rem' : '1.5rem',
    position: isMobile ? 'absolute' : 'static',
    top: isMobile ? '80px' : 'auto',
    right: isMobile ? '20px' : 'auto',
    background: isMobile ? '#c8e6c9' : 'transparent',
    padding: isMobile ? '1rem' : '0',
    borderRadius: '10px',
    boxShadow: isMobile ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none',
  };

  const hamburgerStyle = {
    display: isMobile ? 'block' : 'none',
    cursor: 'pointer',
    color: '#2e7d32',
  };

  const handleHover = (e, isHovering) => {
    e.target.style.background = isHovering ? '#a5d6a7' : 'transparent';
    e.target.style.transform = isHovering ? 'scale(1.05)' : 'scale(1)';
  };

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Kavya Nutrition" style={logoStyle} />
      </Link>

      {/* Hamburger / Close icon */}
      <div onClick={toggleMenu} style={hamburgerStyle}>
        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {/* Menu Links */}
      <div className="nav-links" style={menuStyle}>
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
            onClick={() => setMenuOpen(false)}
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
