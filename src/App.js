import React, { Component } from 'react';
import { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import './App.css';


const data = [
  { option: '0', style: { backgroundColor: '#F5AE99', textColor: 'white' }},
  { option: '1', style: { backgroundColor: '#F55D88', textColor: 'white' }},
  { option: '2', style: {backgroundColor: '#F54599', textColor: 'white'}},
  { option: '3', style: {backgroundColor: '#D95959', textColor: 'white'}},
  { option: '4', style: {backgroundColor: '#E60287', textColor: 'white'}}
];

const App = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div className="container">
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button className="custom-button" onClick={handleSpinClick}>SPIN</button>
    </div>
  );
};

export default App;
