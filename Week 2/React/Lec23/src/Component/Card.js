// src/Card.js
import React, { useState } from 'react';

const Card = () => {
  const [clicks, setClicks] = useState(0);
  const [bgColor, setBgColor] = useState('#fff');

  const randomColor = () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A8'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleCardClick = () => {
    setClicks(clicks + 1);
    setBgColor(randomColor());
  };

  const handleAddClick = () => {
    setClicks(clicks + 1);
  };

  const handleSubtractClick = () => {
    setClicks(clicks > 0 ? clicks - 1 : 0);
  };

  const handleRefreshClick = () => {
    setClicks(0);
    setBgColor('#fff');
  };

  return (
    <div>
      <div
        onClick={handleCardClick}
        style={{
          backgroundColor: bgColor,
          width: '200px',
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '20px auto',
          border: '1px solid #000',
          cursor: 'pointer',
        }}
      >
        {clicks}
      </div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={handleAddClick}>+</button>
        <button onClick={handleSubtractClick}>-</button>
        <button onClick={handleRefreshClick}>Refresh</button>
      </div>
    </div>
  );
};

export default Card;
