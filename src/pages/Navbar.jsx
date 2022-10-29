import React from 'react';
import { NavLink } from 'react-dom';

const Links = [
  { to: '/', text: 'Home' },
  { to: '/Calculator', text: 'Calculator' },
  { to: '/about', text: 'About' },
];

const Navbar = () => (
  <nav className="navbar">
    <h1>MATH MAGICIANS</h1>
    <ul>
      {Links.map((links) => (
        <li
         key={links.to}
        >
          <NavLink
            to={item.to}
          >
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
