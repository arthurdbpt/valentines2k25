import React from 'react';
import '../App.css';

const ResultCard = ({ result, message, imageSrc, onClose }) => {
  return (
    <div className="result-card">
      <h2>{result}</h2>
      <img src={imageSrc} alt={result} className="result-image" />
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ResultCard;
