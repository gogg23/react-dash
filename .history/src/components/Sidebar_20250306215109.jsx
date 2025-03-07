import React from 'react';
import { BiHome, BiBookAlt } from 'react-icons/bi';

const Sidebar = () => {
  return (
    <div className='menu'>
      <div className='logo'>
        <BiBookAlt />
        <h2>EduFlex</h2>
      </div>
    </div>
  );
};

export default Sidebar;
