import React from 'react';
import './Students.css';
import data from '../data.json';

function Students() {
  return (
    <div className='students'>
      <div className='student-cards'>
        {data.map(student => (
          <div key={student.id} className='card'>
            <img src={student.photo} alt={student.name} className='card-image' />
            <h3 className='card-title'>{student.name}</h3>
            <p className='card-description'>Student</p>
            <div className='hidden'>
              <a href={student.linkedin} target="_blank" rel="noopener noreferrer">
                <img src='https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/56-linkedin-128.png' alt='LinkedIn' className='linkedin-icon' />
              </a>
              <a href={student.github} target="_blank" rel="noopener noreferrer">
                <img src='https://cdn-icons-png.flaticon.com/128/2111/2111425.png' alt='GitHub' className='github-icon' />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;