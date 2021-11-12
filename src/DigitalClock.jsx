import React from "react";
import { useState } from "react";

const DigitalClock = () => {
  let currentTime = new Date().toLocaleTimeString();
  const [cTime, setTime] = useState(currentTime);
  
  const updateTime = () =>{
      currentTime = new Date().toLocaleTimeString();
      setTime(currentTime);
  }
  setInterval(updateTime, 1000)

  return (
    <div className="heading">
      <h1>{cTime}</h1>
      {/* <button onClick={updateTime}>Get Time</button> */}
    </div>
  );
};

export default DigitalClock;
