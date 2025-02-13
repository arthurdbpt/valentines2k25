import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import './App.css';
import ResultCard from './components/ResultCard';

const data = [
  { option: 'GIFT n°1', style: { backgroundColor: '#F5AE99', textColor: 'white' }},
  { option: 'GIFT n°2', style: { backgroundColor: '#F55D88', textColor: 'white' }},
  { option: 'GIFT n°3', style: {backgroundColor: '#F54599', textColor: 'white'}},
  { option: 'GIFT n°4', style: {backgroundColor: '#D95959', textColor: 'white'}},
  { option: 'GIFT n°5', style: {backgroundColor: '#E60287', textColor: 'white'}}
];

const prizeMessages = [
  "Awesome, you've won a fantastic 40L duffel bag.",
  "Amazing! We're gonna have the same bag !",
  "Lucky you! You've won a cool 36L duffel bag.",
  "Fantastic! You've won the huge one ! 50L !.",
  "Wow! You've won an classy little bag."
];

const prizeImages = [
  `${process.env.PUBLIC_URL}/images/gift1.png`,
  `${process.env.PUBLIC_URL}/images/gift2.png`,
  `${process.env.PUBLIC_URL}/images/gift3.png`,
  `${process.env.PUBLIC_URL}/images/gift4.png`,
  `${process.env.PUBLIC_URL}/images/gift5.png`,
];

const App = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showResultCard, setShowResultCard] = useState(false);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleCloseResultCard = () => {
    setShowResultCard(false);
  };

  return (
    <>
      <div className="title-box">
        <h1 className='ms-madi-regular'>💖 💖 💖 💖 💖 💖 💖 💖 💖<br/>Happy Valentine's<br/>Day<br/>💖 💖 💖 💖 💖 💖 💖 💖 💖</h1>
        <h3 className='ms-madi-regular'>To : Yasmeen<br/>From : Arthur</h3>
      </div>
      <div className="wheel-box">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          outerBorderColor='#FF0062'
          innerBorderColor='#FF0062'
          radiusLineColor='#FF0062'
          onStopSpinning={() => {
            setMustSpin(false);
            setShowResultCard(true);
            console.log(prizeImages[prizeNumber]);
          }}
        />
        <button className="custom-button" onClick={handleSpinClick}>SPIN</button>
      </div>
      <div className="footer">
        <p className='ms-madi-regular'>Love u</p>
      </div>
      {showResultCard && (
        <ResultCard
          result={data[prizeNumber].option}
          message={prizeMessages[prizeNumber]}
          imageSrc={prizeImages[prizeNumber]}
          onClose={handleCloseResultCard}
        />
      )}
    </>
  );
};

export default App;
