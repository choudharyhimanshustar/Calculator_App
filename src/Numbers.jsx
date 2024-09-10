// Numbers.jsx
import React, { useState } from 'react';
import './Numbers.css';

function Numbers({ setDisplayValue }) {
  const [num, setNum] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState(null);

  function handleNumberClick(value) {
    const newNum = num * 10 + value; // Construct the number step-by-step
    setNum(newNum);
    setDisplayValue(newNum); // Update display with the current input
  }

  function calcResult() {
    let answer = result;
    if (operator === "+") answer += num;
    else if (operator === "-") answer -= num;
    else if (operator === "*") answer *= num;
    else if (operator === "/") answer /= num;

    setDisplayValue(answer); // Display the calculated answer
    setResult(answer); // Set the result for the next operation
    setNum(answer); // Reset num to start a new input
  }

  function handleOperatorClick(op) {
    setOperator(op);
    setResult(num);
    setNum(0);
  }

  return (
    <div className="Numbers">
      <div className="NumRow">
        {[0, 1, 2, 3].map((n) => (
          <div key={n} className="NumbersBox" onClick={() => handleNumberClick(n)}>
            {n}
          </div>
        ))}
      </div>
      <div className="NumRow">
        {[4, 5, 6, 7].map((n) => (
          <div key={n} className="NumbersBox" onClick={() => handleNumberClick(n)}>
            {n}
          </div>
        ))}
      </div>
      <div className="NumRow">
        {[8, 9].map((n) => (
          <div key={n} className="NumbersBox" onClick={() => handleNumberClick(n)}>
            {n}
          </div>
        ))}
        <div className="NumbersBox" onClick={() => handleOperatorClick("+")}>
          +
        </div>
        <div className="NumbersBox" onClick={() => handleOperatorClick("-")}>
          -
        </div>
      </div>
      <div className="NumRow">
        <div className="NumbersBox" onClick={() => handleOperatorClick("*")}>
          *
        </div>
        <div className="NumbersBox" onClick={() => handleOperatorClick("/")}>
          /
        </div>
        <div className="NumbersBox" onClick={calcResult}>
          =
        </div>
        <div className="NumbersBox" onClick={() => { setNum(0); setResult(0); setDisplayValue(0); }}>
          C
        </div>
      </div>
    </div>
  );
}

export default Numbers;
