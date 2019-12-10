import React from "react";

const SpecialButton = (props) => {
  return (
      <button onClick={() => props.displaySp(props.spButtonText)}>{props.spButtonText}</button>
  );
};

export default SpecialButton;