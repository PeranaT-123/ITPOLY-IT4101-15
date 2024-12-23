import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>IT Department Highlights</h2>
      <p>Welcome to the IT Department. Our mission is to innovate and inspire.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        <img src="/images/image 1.jpeg" alt="images 1" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
        <img src="/images/image 2.jpeg" alt="images 2" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
        <img src="/images/image 3.jpg" alt="images 3" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
        <img src="/images/image 4.jpg" alt="images 4" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      </div>
    </div>
  );
};

export default Home;
