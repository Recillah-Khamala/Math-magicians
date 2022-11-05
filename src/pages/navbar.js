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
    <nav className="fixed top-0 left-0 right-0 flex justify-between px-12 py-5 items-center shadow shadow-gray-100 bg-transparent bg-none z-50 text-emerald-300">
      <div className="text-4xl">
        <Link to="/" className="text-emerald-300 font-black">Math Magician</Link>
      </div>
      <ul flex className="flex gap-4 items-center">
        {Links.map((links) => (
          <li key={links.to} className="mr-8 text-xl">
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
