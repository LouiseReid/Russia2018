import React from 'react';

const GameEnd = (props) => {
  console.log(props);
  return (
    <div>Final Score: {props.finalScore}</div>
  )
}

export default GameEnd;
