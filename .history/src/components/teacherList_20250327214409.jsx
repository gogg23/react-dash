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

  {
    image: Image1,
    name: 'Prof. John Doe',
    duration: '20 hours lesson',
    cost: '100',
  },

  {
    image: Image1,
    name: 'Prof. John Doe',
    duration: '20 hours lesson',
    cost: '100',
  },

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
        </select>
      </div>
      <div className='list--container'>
        {teachers.map((teacher, index) => (
          <div className='list' key={index}>
            <div className='teacher--detail'>
              <img src={teacher.image} alt={teacher.name} />
              <h2>{teacher.name}</h2>
            </div>
            <span>{teacher.duration}</span>
            <span>{teacher.cost}</span>
            <span className='to--do'></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;
