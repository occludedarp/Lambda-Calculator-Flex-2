import React from "react";
import NumberButton from "./NumberButton";
    
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = ({ numData, displayNum }) => {
  // STEP 2 - add the imported data to state

  return (
    <div>
      {numData.map( (number, index) => (
        <NumberButton 
          numButtonText={number}
          displayNum={displayNum}
          key={index}/>
      ))}
    </div>
  );
};

export default Numbers;