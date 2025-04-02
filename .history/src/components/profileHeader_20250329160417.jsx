import React from 'react';
import { BiEdit } from 'react-icons/bi';

const profileHeader = () => {
  return (
    <div>
      <div className='header--title'></div>
      <h2 className='header--title'>Profile</h2>
      <div className='edit'>
        <BiEdit />
      </div>
    </div>
  );
};

export default profileHeader;
