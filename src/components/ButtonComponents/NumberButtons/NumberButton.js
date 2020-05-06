import React from "react";

const NumberButton = props => {
  return(
   <button onClick={() => props.displayNum(props.numButtonText)}>{props.numButtonText}</button>
  )
};

export default NumberButton;