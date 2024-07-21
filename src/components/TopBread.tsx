import React from 'react';
import '../assets/TopBread.css';

const TopBread: React.FC<{ size: string }> = ({ size }) => {
  return (
    <div className={`top-burger ${size}`}>
      <div className="seed1" />
      <div className="seed2" />
      <div className="seed3" />
      <div className="seed4" />
      <div className="seed5" />
      <div className="seed6" />
      <div className="seed7" />
      <div className="seed8" />
      <div className="seed9" />
      <div className="seed10" />
    </div>
  );
};

export default TopBread;
