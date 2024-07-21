import React from 'react';
import '../assets/TopBread.css';

const TopBread = ({ size }) => {
  return (
    <div className={`top-burger ${size}`}>
      <div className="seed1"></div>
      <div className="seed2"></div>
      <div className="seed3"></div>
      <div className="seed4"></div>
      <div className="seed5"></div>
      <div className="seed6"></div>
      <div className="seed7"></div>
      <div className="seed8"></div>
      <div className="seed9"></div>
      <div className="seed10"></div>
    </div>
  );
};

export default TopBread;