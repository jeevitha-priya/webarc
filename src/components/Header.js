import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60px', backgroundColor: 'rgb(248, 249, 250)' }}>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '20px' }}>
        <li style={{ fontSize: '18px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'rgb(51, 51, 51)', transition: 'color 0.3s' }}>Home</Link>
        </li>
        <li style={{ fontSize: '18px' }}>
          <Link to="/profile" style={{ textDecoration: 'none', color: 'rgb(51, 51, 51)', transition: 'color 0.3s' }}>Profile</Link>
        </li>
        <li style={{ fontSize: '18px' }}>
          <Link to="/about" style={{ textDecoration: 'none', color: 'rgb(51, 51, 51)', transition: 'color 0.3s' }}>About</Link>
        </li>
        <li style={{ fontSize: '18px' }}>
          <Link to="/projects" style={{ textDecoration: 'none', color: 'rgb(51, 51, 51)', transition: 'color 0.3s' }}>Projects</Link>
        </li>
        <li style={{ fontSize: '18px' }}>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'rgb(51, 51, 51)', transition: 'color 0.3s' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
