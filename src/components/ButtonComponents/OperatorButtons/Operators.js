import React from "react";

import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = ({ opData }) => {
  // STEP 2 - add the imported data to state
  
  return (
    <div>
      {opData.map((operator, index) => (
        <OperatorButton 
          opButtonText={operator.char}
          key={index}
        />
      ))}
    </div>
  );
};

export default Operators;