import React from 'react';

const Contact = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <h2>Contact Us</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', width: '100%' }}>
        <input type="text" placeholder="Your Name" required style={{ padding: '0.5rem' }} />
        <input type="email" placeholder="Your Email" required style={{ padding: '0.5rem' }} />
        <textarea placeholder="Your Message" rows="5" required style={{ padding: '0.5rem' }}></textarea>
        <button type="submit" style={{ background: '#4CAF50', color: '#fff', border: 'none', padding: '0.5rem' }}>Submit</button>
      </form>
      <p>Email: STU67319010024@lannapoly.ac.th </p>
      <p>Phone: +66 123 456 789</p>
      <iframe src="https://www.google.com/maps/embed?..." width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
    </div>
  );
};

export default Contact;
