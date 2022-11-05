import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  const Links = [
    {
      to: '/',
      text: 'Home',
    },
    {
      to: '/Calculator',
      text: 'Calculator',
    },
    {
      to: '/about',
      text: 'About',
    },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between px-12 py-5 items-center shadow shadow-gray-100 bg-transparent bg-none z-50">
      <div>
        <Link to="/">Math Magician</Link>
      </div>
      <ul>
        {Links.map((links) => (
          <li key={links.to}>
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? ' activated' : ''}`}
              end
              to={links.to}
            >
              {links.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
