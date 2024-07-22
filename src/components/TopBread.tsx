import React from 'react';
import '../assets/TopBread.css';
interface TopBreadProps {
  size: string;
}

const TopBread: React.FC<TopBreadProps> = ({ size }) => {

  const seeds = Array.from({ length: 10 }, (_, index) => (
    <div key={index} className={`seed${index + 1}`} />
  ));

  return (
    <div className={`top-burger ${size}`}>
      {seeds}
    </div>
  );
};

export default TopBread;

