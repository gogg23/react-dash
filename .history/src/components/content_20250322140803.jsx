import React from 'react';
import ContentHeader from './ContentHeader';
import '../styles/content.css';

const Content = () => {
  return (
    <div className='content'>
      <ContentHeader />
      <div className='content-body'>{/* Other dashboard content */}</div>
    </div>
  );
};

export default Content;
