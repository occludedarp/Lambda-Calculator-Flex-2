import React from "react";

const OperatorButton = (props) => {
  return (
      <button onClick={() => props.displayOp(props.opButtonText)}> {props.opButtonText} </button>
  );
};

export default OperatorButton;