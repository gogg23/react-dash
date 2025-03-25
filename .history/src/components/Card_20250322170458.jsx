import React from 'react';
import { BiBuilding, BiLogoAndroid, BiLogoHtml5 } from 'react-icons/bi';

const course = [
  {
    title: 'Web Development',
    icon: <BiLogoHtml5 />,
  },
  {
    title: 'App Development',
    duration: '2 hours',
    icon: <BiLogoAndroid />,
  },
  {
    title: 'UX & UI',
    duration: '2 hours',
    icon: <BiBuilding />,
  },
];

const Card = () => {
  return <div>Card</div>;
};

export default Card;
