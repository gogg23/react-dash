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
    <div className='teacher-list'>
      {teachers.map((teacher, index) => (
        <div key={index} className='teacher-card'>
          <img src={teacher.image} alt={teacher.name} />
          <h3>{teacher.name}</h3>
          <p>{teacher.duration}</p>
          <p>${teacher.cost}</p>
        </div>
      ))}
    </div>
  );
};

export default TeacherList;
