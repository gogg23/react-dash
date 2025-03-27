import React from 'react';
import '../styles/teacherList.css';
import Image1 from '../assets/images/Image1.jpg';

const teachers = [
  {
    image: Image1,
    name: 'Prof. John Doe',
    duration: '20 hours lesson',
    cost: '100',
  },
];

const TeacherList = () => {
  return (
    <div className='teacher--list'>
      <div className='list--header'>
        <h2>Teachers</h2>
        <select>
          <option value='english'>English</option>
          <option value='hindi'>Hindi</option>
          <option value='english'>English</option>q
        </select>
      </div>
    </div>
  );
};

export default TeacherList;
