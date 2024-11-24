import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeStyle={{ fontWeight: 'bold', color: 'blue' }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeStyle={{ fontWeight: 'bold', color: 'blue' }}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/student" activeStyle={{ fontWeight: 'bold', color: 'blue' }}>
            Student
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
