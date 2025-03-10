import React from 'react';
import {
  BiHome,
  BiBookAlt,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiHelpCircle,
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
          <BiSolidReport />
          Report
        </a>
        <a href='' className='item'>
          <BiStats />
          Stats
        </a>
        <a href='' className='item'>
          <BiMessage />
          Message
        </a>
        <a href='' className='item'>
          <BiHelpCircle />
          Help
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
