import React from 'react';
import { Link } from 'react-scroll';
import "../scss/navbar.scss";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className='navigation'>
      <ul>
        <li className='navList'>
          <Link
            to='portfolio'
            spy={true}
            smooth={true}
            duration={100}
            className="navLink"
          >
            <span>Portfolio</span>
          </Link>
        </li>
        <li className='navList'>
          <Link
            to='FAQ'
            spy={true}
            smooth={true}
            duration={100}
            className="navLink"
          >
            <span>FAQ</span>
          </Link>
        </li>
        <li className='navList'>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            duration={100}
            className="navLink"
          >
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
