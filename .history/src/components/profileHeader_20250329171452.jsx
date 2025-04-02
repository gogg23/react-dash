import React from 'react';
import { BiEdit } from 'react-icons/bi';
import '../styles/profileHeader.css';

const ProfileHeader = () => {
  return (
    <div>
      <h2 className='header--title'>Profile</h2>
      <div className='edit'>
        <BiEdit className='icon' />
        <div className='user--profile'>
          <div className='user--detail'>
            <img src={Image1} alt='' />
            <h2 className='user--name'>John Doe</h2>
            <span className='profession'>Teacher</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
