import React from 'react';
import {
  BiHome,
  BiBookAlt,
  BiTask,
  BiMessage,
  BiSolidReport,
  BiStats,
  BiHelpCircle,
  BiTaskX,
} from 'react-icons/bi';
import '../styles/Sidebar.css';
const Sidebar = () => {
  return (
    <div className='menu'>
      <div className='logo'>
        <BiBookAlt className='logo-icon' />
        <h2>EduFlex</h2>
      </div>

      <div className='menu--list'>
        <a href='' className='item active'>
          <BiHome />
          Dashboard
        </a>
        <a href='' className='item'>
          <BiTask />
          Task
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
