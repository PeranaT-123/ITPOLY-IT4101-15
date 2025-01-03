import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: '#333', color: '#fff', padding: '1rem' }}>
      <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</Link></li>
        <li><Link to="/Coures" style={{ color: '#fff', textDecoration: 'none' }}>Courses</Link></li>
        <li><Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
