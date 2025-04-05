import React from 'react';
import { BiEdit } from 'react-icons/bi';
import ProfileHeader from './ProfileHeader';
import '../styles/profileHeader.css';
import Image1 from '../assets/images/Image1.jpg';

const Profile = () => {
  return (
    <div className='profile'>
      <ProfileHeader />
      <div className='user--detail'>
        <img
          src={Image1}
          alt='Profile'
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />

        <h2 className='user--name'>John Doe</h2>
        <span className='profession'>Teacher</span>
      </div>
      <div className='user-courses'></div>
    </div>
  );
};

export default Profile;
