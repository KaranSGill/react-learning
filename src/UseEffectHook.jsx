import React, { useState , useEffect} from "react";

const UseEffectHook = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);
   useEffect(() => {
     alert('I am clicked');
   }, [num]);  // the alert is only clicked when we click button with useState num 

  const Increment= () => {
    setNum(num + 1)
  }
  const Decrement = () => {
   setNums( nums - 1);
  }

  return (
    <>
      <button onClick={Increment} >  Click me {num} </button>
      <button onClick={Decrement}> Click me {nums} </button>
    </>
  );
};

export default UseEffectHook;
