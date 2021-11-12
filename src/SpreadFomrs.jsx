import React from "react";
import { useState } from "react";

const SpreadForms = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });
  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFullName((preValue) => {
      console.log({...preValue});
       return {
         ...preValue,
          [name]: value,
       }
    });
  };
  const onSubmit = (e) => {
    alert("Form Submitted");
    e.preventDefault();
    document.getElementById("clear").value = "";
    document.getElementById("clears").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="forms_heading">
          <h1>
            Hello {fullName.fName} {fullName.lName}
          </h1>
          <p style={{ marginTop: "2rem" }}>{fullName.email}</p>
          <p style={{ marginTop: "1.5rem" }}>{fullName.phone}</p>
          <input
            id="clear"
            type="text"
            placeholder="Enter Your Name"
            name="fName"
            onChange={inputEvent}
            value={fullName.fName}
          />
          <input
            id="clears"
            type="password"
            placeholder="Enter Your Password"
            name="lName"
            onChange={inputEvent}
            value={fullName.lName}
          />
          <input
            id="email"
            type="email"
            placeholder="Enter Your email"
            name="email"
            onChange={inputEvent}
            value={fullName.email}
            autoComplete="off"
          />
          <input
            id="phone"
            type="number"
            placeholder="Enter Your Phone Number"
            name="phone"
            onChange={inputEvent}
            value={fullName.phone}
            autoComplete="off"
          />
          <button type="submit">Click Me 👍🏻</button>
        </div>
      </form>
    </>
  );
};
export default SpreadForms;
