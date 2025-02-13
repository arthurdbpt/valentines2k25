import React from 'react';
import '../App.css';

const ResultCard = ({ result, message, imageSrc, onClose }) => {
  return (
    <div className="result-card">
      <h2 className='ms-madi-regular'>✨{result}✨</h2>
      <img src={imageSrc} alt={result} className="result-image" />
      <p className='ms-madi-regular'>{message}</p>
      <button className='ms-madi-regular' onClick={onClose}>Close</button>
    </div>
  );
};

export default ResultCard;
