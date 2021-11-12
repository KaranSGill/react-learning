import React, { createContext } from "react";
// import "./index.css";
import Game from "./Game";
import Increment from "./Increment";
import CurrentTime from "./CurrentTime";
import DigitalClock from "./DigitalClock";
import HandlingEvents from "./HandlingEvents";
import Forms from "./Forms";
import UpdatedForm from "./UpdatedForm";
import SpreadForms from "./SpreadFomrs"; // We are using the spread Operator to make form more simple
import ComponentA from "./Components/ComponentA";
import UseEffectHook from "./UseEffectHook";

const FirstName = createContext();  //These were used in useContexts
const LastName = createContext();  // Used in useContext hooks

const App = () => {
  return (
    <>
      {/* <Game/> */}
      {/* <Increment/> */}
      {/* <CurrentTime /> */}
      {/* <DigitalClock /> */}
      {/* <HandlingEvents /> */}
      {/* <Forms /> */}
      {/* <UpdatedForm /> */}
      {/* <SpreadForms /> */}
      {/* <FirstName.Provider value={"Gill"}>
        <LastName.Provider value ={'Karan'}>
          <ComponentA />
        </LastName.Provider>
      </FirstName.Provider> */}
      <UseEffectHook />
    </>
  );
};

export default App;
export { FirstName, LastName }; // Used in useContext hooks
