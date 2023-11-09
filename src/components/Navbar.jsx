import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <section id="main">
      <nav>
        <div className="logo">Portfolio</div>
        <input type="checkbox" id="click" />
        <label aria-label="button" htmlFor="click" className="menu-btn">
          <i className="fas fa-bars" />
        </label>
        <ul className="nav-links">
          <li className="hover-underline-animation">
            <Link to="/">
              Home <i className="bx bx-home-circle bx-flip-horizontal" />
            </Link>
          </li>
          <li className="hover-underline-animation">
            <Link to="/about">
              About <i className="bx bxl-graphql" />
            </Link>
          </li>
          <li className="hover-underline-animation">
            <Link to="/services">
              Services <i className="bx bxs-br/iefcase" />
            </Link>
          </li>
          <li className="hover-underline-animation">
            <Link to="/projects">
              Project <i className="bx bx-slideshow" />
            </Link>
          </li>
          <li className="hover-underline-animation">
            <Link to="/contact">
              Contact <i className="bx bx-mobile-alt" />
            </Link>
          </li>
          <li className="hover-underline-animation">
            <Link to="/resume">
              Resume <i className="bx bx-code-alt" />
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
