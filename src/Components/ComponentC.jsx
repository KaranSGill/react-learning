import React from "react";
import { FirstName, LastName } from "../App";

// In this Component we are using Context api
const ComponentC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fName) => {
          return (
            <LastName.Consumer>
              {(lName) => {
                return (
                  <h1>
                    Hello my Name is {fName} {lName}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default ComponentC;
