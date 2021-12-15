import React from 'react'

export default function EntryFee(props) {
  return (
    <div className='entryfee'>
      <h3>Ages {props.age} and under: ${props.fee}</h3>
    </div>
  );
};
