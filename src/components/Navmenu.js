import React, { useState } from "react";

const Navmenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="branding">Ethical<span>GT</span></div>
        <nav className="desktop-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#about">Education</a></li>
            <li><a href="#about">Projects</a></li>
            <li><a href="#projects">Skills</a></li>
            <li><a href="#about">Achievements</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>

        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className={`hamburger-btn ${isOpen ? "open" : ""}`}
        >
          <div className={`bar1 ${isOpen ? "change" : ""}`}></div>
          <div className={`bar2 ${isOpen ? "change" : ""}`}></div>
          <div className={`bar3 ${isOpen ? "change" : ""}`}></div>
        </button>
      </header>
      <nav className={`side-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About Me</a></li>
          <li><a href="#projects" onClick={closeMenu}>Education</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#projects" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Achievements</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact Me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navmenu;
