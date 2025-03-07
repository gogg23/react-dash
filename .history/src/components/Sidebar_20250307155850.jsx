import React from 'react';
import {
  BiHome,
  BiBookAlt,
  BiMessage,
  BiSolidReport,
  BiStats,
} from 'react-icons/bi';

const Sidebar = () => {
  return (
    <div className='menu'>
      <div className='logo'>
        <BiBookAlt />
        <h2>EduFlex</h2>
      </div>

      <div className='menu--items'>
        <a href='' className='item'>
          <BiHome />
          Dashboard
        </a>
        <a href='' className='item'>
          <BiHome />
          Dashboard
        </a>
        <a href='' className='item'>
          <BiHome />
          Dashboard
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
