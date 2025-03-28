import React from 'react';
import ContentHeader from './ContentHeader';
import '../styles/content.css';
import Card from '../components/Card';
import TeacherList from '../components/teacherList';

const Content = () => {
  return (
    <div className='content'>
      <ContentHeader />
      <Card />
      <TeacherList />
    </div>
  );
};

export default Content;
