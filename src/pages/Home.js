import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>IT Department Highlights</h2>
      <p>Welcome to the IT Department. Our mission is to innovate and inspire.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        <img src={process.env.PUBLIC_URL + "/images/image 1.jpeg"} alt ="image 1" style={{ width: '70%', height: '350px', objectFit: 'cover' }} />
        <img src={process.env.PUBLIC_URL + "/images/image 2.jpeg"} alt ="image 2" style={{ width: '70%', height: '350px', objectFit: 'cover' }} />
        <img src={process.env.PUBLIC_URL + "/images/image 3.jpg"} alt ="image 3" style={{ width: '70%', height: '350px', objectFit: 'cover' }} />
        <img src={process.env.PUBLIC_URL + "/images/image 4.jpg"} alt ="image 4" style={{ width: '70%', height: '350px', objectFit: 'cover' }} />
      </div>
    </div>
  );
};

export default Home;
