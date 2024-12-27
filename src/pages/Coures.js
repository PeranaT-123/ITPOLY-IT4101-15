import React from 'react';
import { useParams } from 'react-router-dom';

const Courses = () => {
  const { courseType } = useParams(); // ใช้ React Router params เพื่อดึงข้อมูลที่ส่งมา

  const getPDFFile = () => {
    switch (courseType) {
      case 'vocational':
        return '/PDF/vocational.pdf';
      case 'diploma':
        return '/PDF/diploma.pdf';
      default:
        return null;
    }
  };

  const pdfFile = getPDFFile();

  return (
    <div style={{ padding: '20px' }}>
      {pdfFile ? (
        <object
          data={pdfFile}
          type="application/pdf"
          width="100%"
          height="600px"
        >
          <p>PDF cannot be displayed. Please download the PDF from the link below:</p>
          <a href={pdfFile} target="_blank" rel="noopener noreferrer">Download PDF</a>
        </object>
      ) : (
        <p>Course not found.</p>
      )}
    </div>
  );
};

export default Courses;
