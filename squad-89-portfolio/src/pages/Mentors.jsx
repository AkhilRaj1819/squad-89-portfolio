import React from 'react';
import './Mentors.css';

function Mentors() {
  return (
    <>
      <h1>OUR MENTORS</h1>
      <div className='mentors'>
        <div className='mentor-cards'>
          <div className='card'>
            <img src='/mentor-photos/nikhil.jpg' alt='Mentor 1' className='card-image' />
            <h3 className='card-title'>Nikhil</h3>
            <p className='card-description'>Campus manager</p>
            <p className='hidden'>He is supportive, motivational, strategic, communicative.</p>
            <div>
              <a href="https://www.linkedin.com/in/nikhil" target="_blank" rel="noopener noreferrer">
                <img src='https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/56-linkedin-128.png' alt='LinkedIn' className='linkedin-icon' />
              </a>
            </div>
          </div>
          <div className='card'>
            <img src='https://squad72.netlify.app/Sir.jpg' alt='Mentor 2' className='card-image' />
            <h3 className='card-title'>Abhishek</h3>
            <p className='card-description'>Technical mentor</p>
            <p className='hidden'>He brings his expertise in creating joyful learning experience.</p>
            <div>
              <a href="https://www.linkedin.com/in/abhishek" target="_blank" rel="noopener noreferrer">
                <img src='https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/56-linkedin-128.png' alt='LinkedIn' className='linkedin-icon' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <footer>
        <h5 className='footer'>© 2025 SQUAD 89. All rights reserved.</h5>
        <h5 className='footer'>Proudly learning at Kalvium</h5>
      </footer>
    </>
  );
}

export default Mentors;