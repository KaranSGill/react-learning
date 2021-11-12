import React from "react";
import { useState } from "react";

const HandlingEvents = () => {
  let purple = "#8e44ad";
  const [bgColor, setColor] = useState(purple);
  let [name, setName] = useState("Click me 🙂");
  const bgChange = () => {
    let newBg = "#34495e";
    setColor(newBg);
    setName("Ouch!! 🥰");
  };
  const bgBack = () => {
    setColor(purple);
    setName("Ayoo!! 😤 ");
  };
  return (
    <div className="click_heading" style={{ background: bgColor }}>
      <button onMouseDown={bgChange} onMouseUp={bgBack} >   
        {name}
      </button>
    </div>
  );
};

export default HandlingEvents;
