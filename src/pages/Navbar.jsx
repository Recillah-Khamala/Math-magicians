import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from 'react-router-dom';
import Calculator from '../components/Calculator';
import Quote from './About';
import Home from './Home.Jsx';

const Navbar = () => {
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
    <Router>
      <nav className="fixed top-0 left-0 right-0 flex justify-between px-12 py-5 items-center shadow shadow-gray-100 bg-transparent bg-none z-50">
        <div>
          <Link to="/">Math Magician</Link>
        </div>
        <ul>
          {Links.map((links) => (
            <li key={links.to}>
              <NavLink to={links.to}>{links.text}</NavLink>
            </li>
          ))}
        </ul>
        <Routes>
          <Route to="/" element={<Home />} />
          <Route to="/Calculator" element={<Calculator />} />
          <Route to="/About" element={<Quote />} />
        </Routes>
      </nav>
    </Router>
  );
};

export default Navbar;
