import React, { useState } from "react";

const Navmenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="branding">Ganesh<span>&nbsp;Telore</span></div>
        <nav className="desktop-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#aboutme">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#contactme">Contact Me</a></li>
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
          <li><a href="#aboutme" onClick={closeMenu}>About Me</a></li>
          <li><a href="#education" onClick={closeMenu}>Education</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#achievements" onClick={closeMenu}>Achievements</a></li>
          <li><a href="#contactme" onClick={closeMenu}>Contact Me</a></li>
        </ul>
        <span>Engineered with <i class="fa-solid fa-heart-pulse"></i> by GT</span>
      </nav>
    </>
  );
};

export default Navmenu;
