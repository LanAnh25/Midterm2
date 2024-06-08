import React, { useState } from "react";

function App() {
 
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(false);

 
  const onA = (e) => {
    setA(e.target.value);
  };


  const onB = (e) => {
    setB(e.target.value);
  };


  const computeSum = () => {
    const numA = parseFloat(a);  
    const numB = parseFloat(b); 

    if (isNaN(numA) || isNaN(numB)) {     
      setError(true);
      setResult("A and B shall be numbers !");
    } else {
      setError(false);
      setResult(numA + numB);
    }
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>
      <input disabled value={result} style={{ color: error ? "red" : "black" }} />

      <button onClick={computeSum}>Compute</button>
    </main>
  );
}

export default App;