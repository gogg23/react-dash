import React from 'react';
import { BiEdit } from 'react-icons/bi';
import '../styles/profileHeader.css';
import Image1 from '../assets/images/Image1.jpg';

const profileHeader = () => {
  return (
    <div>
      <div className='header--title'></div>
      <h2 className='header--title'>Profile</h2>
      <div className='edit'>
        <BiEdit className='icon' />

        <div className='user--profile'>
          <div className='user--detail'>
            <img src={Image1} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default profileHeader;
