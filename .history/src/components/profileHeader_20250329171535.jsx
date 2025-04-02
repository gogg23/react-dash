import React from 'react';
import { BiEdit } from 'react-icons/bi';
import '../styles/profileHeader.css';
import Image1 from '../assets/images/Image1.jpg';
console.log(Image1);

const ProfileHeader = () => {
  return (
    <div>
      <h2 className='header--title'>Profile</h2>
      <div className='edit'>
        <BiEdit className='icon' />
        <div className='user--profile'>
          <div className='user--detail'>
            <img src={userImage} alt='' />
            <h2 className='user--name'>John Doe</h2>
            <span className='profession'>Teacher</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
