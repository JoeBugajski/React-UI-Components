import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <div className="btnSmall">
     {props.number}
    </div>
  )
}

export default NumberButton;