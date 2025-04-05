import React from 'react';
import { BiEdit } from 'react-icons/bi';
import ProfileHeader from './ProfileHeader';
import '../styles/profileHeader.css';
import Image1 from '../assets/images/Image1.jpg';
import { IconBase } from 'react-icons/lib';
import { BiBook } from 'react-icons/bi';

const courses = [
  {
    title: 'English',
    duration: '2 hours',
    icon: <BiBook />,
  },
];

{
  title: 'English',
  duration: '2 hours',
  icon: <BiBook />,
},
];

{
  title: 'English',
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
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            border: '2px solid #fff',
            objectFit: 'cover',
          }}
        />

        <h2 className='user--name'>Jane Doe</h2>
        <span className='profession'>Teacher</span>
      </div>
      <div className='user-courses'>
        {courses.map(courses =>
        <div className='course'>
          <div className='course--details'>
            <div className='course--cover'>

            </div>
          </div>
        </div> )}
      </div>
    </div>
  );
};

export default Profile;
