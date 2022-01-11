import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p data-testid="counter">{count}</p>
      <button
        data-testid="increment"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        data-testid="decrement"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decremnt
      </button>
    </div>
  );
}

export default Counter;
