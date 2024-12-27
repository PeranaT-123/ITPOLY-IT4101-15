import React from 'react';

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/Background.jpg"})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '2rem',
        textAlign: 'center',
        filter: 'blur(20%)',
      }}
    >
      <h1>Welcome to the IT Department</h1>
      <p>Innovate, Inspire, and Achieve</p>
    </header>
  );
};

export default Header;
