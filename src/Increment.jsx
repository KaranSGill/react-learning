import React from "react";
import { useState } from "react";  // React Hooks

const Increment = () => {
  const state = useState();
  let [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
  };
  return (
    <div className="heading">
      <h1 className="h1">{count}</h1>
      <button onClick={IncNum}>Click Me</button>
    </div>
  );
};

export default Increment;
