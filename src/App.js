import React, { useState } from "react";
import "./App.css";
// import { numbers, operators, specials } from "./data";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";
import { specials, operators, numbers } from "./data";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  const [numberIs, setNumber] = useState(numbers);
  const [operatorIs, setOperator] = useState(operators);
  const [specialIs, setSpecial] = useState(specials);
  const [displayIs, setDisplay] = useState(' ');
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  const displayButton = value => {
    setDisplay(displayIs => displayIs + value);
  };



  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display displayed={displayIs} />
        <Numbers numData={numberIs} displayNum={displayButton}/>
        <Operators opData={operatorIs} displayOp={displayButton}/>
        <Specials spData={specialIs} displaySp={displayButton}/>
      </div>
    </div>
  );
}

export default App;
