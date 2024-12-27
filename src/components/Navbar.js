import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <nav style={{ background: '#333', color: '#fff', padding: '1rem' }}>
      <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</Link></li>
        <li
          style={{ position: 'relative' }}
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <span style={{ color: '#fff', textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            Courses <span style={{ marginLeft: '0.5rem', transform: isDropdownVisible ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
          </span>
          {isDropdownVisible && (
            <ul style={{ position: 'absolute', top: '100%', left: 0, background: '#444', padding: '0.5rem', listStyle: 'none', margin: 0, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <li>
                <Link to="/courses/vocational" style={{ color: '#fff', textDecoration: 'none', display: 'block', padding: '0.5rem' }}>
                  ปวช
                </Link>
              </li>
              <li>
                <Link to="/courses/diploma" style={{ color: '#fff', textDecoration: 'none', display: 'block', padding: '0.5rem' }}>
                  ปวส
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li><Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
