import React from 'react';
import { BiSearch } from 'react-icons/bi';

const ContentHeader = () => {
  return (
    <div className='content--header'>
      <h1 className='header--title'>Dashboard</h1>
      <div className='header-activity'>
        <div className='search-box'>
          <input type='text' placeholder='Search anything here...' />
          <BiSearch />
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
