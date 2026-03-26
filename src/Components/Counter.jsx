import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

 
  const increase = () => {
    setCount(prev => prev + 1);
  };

  const decrease = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0)); 
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h2 className="counter-number">Counter: {count}</h2>

      <div className="counter-buttons">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;