import React from 'react';
import '../App.css';

const ResultCard = ({ result, onClose }) => {
    return (
      <div className="result-card">
        <h2>{result}</h2>
        <button onClick={onClose}>Fermer</button>
      </div>
    );
  };
  
  export default ResultCard;