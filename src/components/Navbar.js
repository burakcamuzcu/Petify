import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('petify-theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark-mode');
      setDarkMode(true);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark-mode');
    const newTheme = document.documentElement.classList.contains('dark-mode');
    setDarkMode(newTheme);
    localStorage.setItem('petify-theme', newTheme ? 'dark' : 'light');
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <span className="logo-emoji">🐾</span>
          <span className="logo-text">Petify</span>
        </NavLink>

        <ul className="navbar-menu desktop-menu">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              <span className="nav-icon">🏠</span>
              <span className="nav-text">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/detect" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              <span className="nav-icon">🔍</span>
              <span className="nav-text">Detect</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              <span className="nav-icon">🖼️</span>
              <span className="nav-text">Gallery</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              <span className="nav-icon">ℹ️</span>
              <span className="nav-text">About</span>
            </NavLink>
          </li>
        </ul>

        <button 
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          <span className="theme-icon">{darkMode ? '☀️' : '🌙'}</span>
        </button>

        <button
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {mobileMenuOpen && (
        <>
          <div className="mobile-menu-overlay" onClick={closeMobileMenu} />
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <span className="mobile-menu-title">Navigation</span>
              <button className="mobile-menu-close" onClick={closeMobileMenu}>
                ✕
              </button>
            </div>
            <ul className="mobile-menu-list">
              <li>
                <NavLink 
                  to="/" 
                  onClick={closeMobileMenu}
                  className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}
                >
                  <span className="mobile-icon">🏠</span>
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/detect" 
                  onClick={closeMobileMenu}
                  className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}
                >
                  <span className="mobile-icon">🔍</span>
                  <span>Detect Mood</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/gallery" 
                  onClick={closeMobileMenu}
                  className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}
                >
                  <span className="mobile-icon">🖼️</span>
                  <span>Gallery</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  onClick={closeMobileMenu}
                  className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}
                >
                  <span className="mobile-icon">ℹ️</span>
                  <span>About</span>
                </NavLink>
              </li>
            </ul>
            <div className="mobile-menu-footer">
              <button className="mobile-theme-toggle" onClick={toggleTheme}>
                <span>{darkMode ? '☀️' : '🌙'}</span>
                <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;