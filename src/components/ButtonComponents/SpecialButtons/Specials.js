import React from "react";
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = ({ spData }) => {
  // STEP 2 - add the imported data to state
  
  return (
    <div>
      {spData.map((special, index) => (
        <SpecialButton 
          spButtonText={special}
          key={index}
        />
      ))}
    </div>
  );
};

export default Specials;