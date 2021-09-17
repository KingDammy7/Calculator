import { useState } from "react";
const CreateDigits = () => {

  const updateCalc = (value) => {
    setCalc(calc + value);
  }
  const [calc, setCalc] = useState("");

  return [...Array(9)].map((i, idx) => (
	<button onClick= {() => updateCalc(i,idx)}
  key={`btn ${idx}`}>{idx + 1}</button>
  ));
};

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState ("");
  const operators = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    setCalc(calc + value);
  }

  
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
         { result ? <span> (0) </span> : '' }
          {calc || "0"} 
        </div>

        <div className="operators">
          <button onClick= {() => updateCalc('/') }>/</button>
          <button onClick= {() => updateCalc('*')}>*</button>
          <button onClick= {() => updateCalc('+')}>+</button>
          <button onClick= {() => updateCalc('-')}>-</button>

          <button>DEL</button>
        </div>

        <div className="digits">
          <CreateDigits  />
          <button onClick= {() => updateCalc('0')}>0</button>
          <button onClick= {() => updateCalc('.')}>.</button> 
         
          <button> =</button>
        </div>
      </div>
    </div>
  );
}

export default App;
