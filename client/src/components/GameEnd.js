import React from 'react';
import './GameEnd.css'

const GameEnd = (props) => {
  return (
    <div className="final-result">
      <p>Final Score: {props.finalScore}/100</p>
    </div>
  )
}

export default GameEnd;
