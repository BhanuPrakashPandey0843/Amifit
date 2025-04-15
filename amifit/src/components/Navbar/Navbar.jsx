import React, { useState, useEffect } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  const toggleNavbar = () => setNavActive(!navActive);
  const closeNavbar = () => setNavActive(false);

  useEffect(() => {
    const handleScroll = () => setHeaderActive(window.scrollY >= 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header${headerActive ? ' active' : ''}`} data-header>
      <div className="container">
        <a href="#" className="logo">Futras<span className="span">.</span></a>
        <nav className={`navbar${navActive ? ' active' : ''}`} data-navbar>
          <button className="nav-toggle-btn" onClick={toggleNavbar} aria-label="close menu">
            <IoCloseOutline />
          </button>
          <ul className="navbar-list">
            {['home', 'about', 'course', 'blog'].map((item) => (
              <li key={item} className="navbar-item">
                <a href={`#${item}`} className="navbar-link" onClick={closeNavbar}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
              </li>
            ))}
            <li className="navbar-item"><a href="#" className="navbar-link" onClick={closeNavbar}>Contact</a></li>
          </ul>
        </nav>
        <a href="#" className="btn btn-primary">Sign Up</a>
        <button className="nav-toggle-btn" onClick={toggleNavbar} aria-label="open menu">
          <IoMenuOutline />
        </button>
        <div className={`overlay${navActive ? ' active' : ''}`} onClick={toggleNavbar}></div>
      </div>
    </header>
  );
};

export default Navbar;