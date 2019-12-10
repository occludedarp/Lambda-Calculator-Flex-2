import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorIs, setOperator] = useState(operators);
  return (
    <div>
      {operatorIs.map((operator, index) => (
        <OperatorButton 
          opButtonText={operator.char}
          key={index}
        />
      ))}
    </div>
  );
};

export default Operators;