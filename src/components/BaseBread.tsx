import React from 'react';
import '../assets/BaseBread.css';

const BaseBread: React.FC<{ size: string }> = ({ size }) => {
  return (
    <div className={`base-bread ${size}`} />
  );
};

export default BaseBread;
