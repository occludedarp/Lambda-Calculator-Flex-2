import React from "react";

const NumberButton = props => {
  return(
   <button onClick={(e) => props.displayIt(props.numButtonText)}>{props.numButtonText}</button>
  )
};

export default NumberButton;