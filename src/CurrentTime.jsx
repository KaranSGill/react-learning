import React from "react";
import { useState } from "react";

const CurrentTime = () => {
  let time = new Date().toLocaleTimeString();
  let [cTime, setTime] = useState(time);
  const CTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  return (
    <div className="heading">
      <h1 className="h1">{cTime}</h1>
      <button onClick={CTime}>Get Time</button>
    </div>
  );
};

export default CurrentTime;
