import React from 'react';
import { useParams } from 'react-router-dom';

const Courses = () => {
  const { courseType } = useParams();

  const courses = [
    { id: '1', name: '1', pdfPath: process.env.PUBLIC_URL + '/PDF/1.pdf' },
    { id: '2', name: '2', pdfPath: process.env.PUBLIC_URL + '/PDF/2.pdf' },
    { id: '3', name: '3', pdfPath: process.env.PUBLIC_URL + '/PDF/3.pdf' },
    { id: '4', name: '4', pdfPath: process.env.PUBLIC_URL + '/PDF/4.pdf' },
  ];

  const handleButtonClick = (pdfPath) => {
    window.open(pdfPath, '_blank');
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px',
      padding: '20px',
      marginBottom: '50px',
    }}>
      {courses.map((course) => (
        <div key={course.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', textAlign: 'center', height: '100%' }}>
          <h3>{course.name}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <button
              style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
              onClick={() => handleButtonClick(course.pdfPath)}
            >
              View more
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
