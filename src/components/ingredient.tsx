import React from 'react';
import '../assets/ingredient.css';

const ingredient = ({ color, type }) => {
    return (
        <div className={`filling ${type.any}`} style={{ backgroundColor: color }}>
            {type}
        </div>
    );
};

export default ingredient;

