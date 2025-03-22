import React from 'react';
import { BiSearch, BiNotification } from 'react-icons/bi';

const ContentHeader = () => {
  return (
    <div className='content--header'>
      <h1 className='header--title'>Dashboard</h1>

      <div className='header--activity'>
        <div className='header-searchbox'>
          <input type='text' placeholder='Search anything here...' />
          <BiSearch className='icon' />
        </div>

        <div className='notify'>
          <BiNotification className='icon' />
        </div>

        <div className='header--profile'>Profile</div>
      </div>
    </div>
  );
};

export default ContentHeader;
