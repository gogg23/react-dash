import React from 'react';
import { BiSearch, BiBell } from 'react-icons/bi';

const ContentHeader = () => {
  return (
    <div className='content--header'>
      <h1 className='header--title'>Dashboard</h1>

      {/* Right side container */}
      <div className='header--right'>
        {/* Search bar + Notification */}
        <div className='header--activity'>
          <div className='header-searchbox'>
            <input type='text' placeholder='Search anything here...' />
            <BiSearch className='icon' />
          </div>
          <div className='notify'>
            <BiBell className='icon' />
          </div>
        </div>

        {/* Profile (ONLY ONE INSTANCE) */}
        <span className='header--profile'>Profile</span>
      </div>
    </div>
  );
};

export default ContentHeader;
