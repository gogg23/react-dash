import React from 'react';
import { BiEdit, BiBook } from 'react-icons/bi';
import ProfileHeader from './ProfileHeader';
import '../styles/Profile.css';
import Image1 from '../assets/images/Image1.jpg';

const courses = [
  {
    title: 'HTML & CSS',
    duration: '2 hours',
    icon: <BiBook />,
  },
  {
    title: 'Java',
    duration: '2 hours',
    icon: <BiBook />,
  },
  {
    title: 'React.js',
    duration: '2 hours',
    icon: <BiBook />,
  },
];

const Profile = () => {
  return (
    <div className='profile'>
      <ProfileHeader />
      <div className='user--detail'>
        <img
          src={Image1}
          alt='Profile'
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '2px solid #fff',
            objectFit: 'cover',
          }}
        />
        <h2 className='user--name'>Jane Doe</h2>
        <span className='profession'>Teacher</span>
      </div>

      <div className='user--courses'>
        {' '}
        {/* ✅ FIXED class name */}
        {courses.map((course, index) => (
          <div className='course' key={index}>
            <div className='course-detail'>
              <div className='course-cover'>{course.icon}</div>
              <div className='course-name'>
                <h5 className='title'>{course.title}</h5>
                <span className='duration'>{course.duration}</span>
              </div>
            </div>
            <div className='action'></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
