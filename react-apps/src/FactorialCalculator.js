import React, { useState, useMemo } from 'react';

function FactorialCalculator() {
  const [number, setNumber] = useState(5); // Initial number

  const factorial = useMemo(() => {
    console.log('Calculating factorial...');
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
      console.log(i);
    }
    return result;
  }, [number]);

  const handleNumberChange = (e) => {
    setNumber(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <label>
        Enter a number: 
        <input type="number" value={number} onChange={handleNumberChange} />
      </label>
      <p>Factorial of {number} is: {factorial}</p>
    </div>
  );
}

export default FactorialCalculator;
