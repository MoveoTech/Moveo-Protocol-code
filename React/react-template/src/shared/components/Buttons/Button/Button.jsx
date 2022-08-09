import React from 'react';
import "./style"


export default function Button({buttonText, handleButtonClick, disable=false}) {

  return (
  <button className='button-container' onClick={handleButtonClick} disabled={disable}>
      {buttonText}
  </button>
  );
}
