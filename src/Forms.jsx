import React from 'react'
import { useState } from 'react'

const Forms = () => {
  const [name, setName] = useState("")
  const [fullName, setFullName] = useState()
  const [pass, setpass] = useState('');
  const [password, setpassword] = useState();
  const inputEvent =(event) =>{
    setName(event.target.value)
  };
  const passEvent = (event) => {
   setpass( event.target.value);
  }
  const onSubmit = (e) => {
     e.preventDefault();
      setFullName(name)
      setpassword(pass);
      document.getElementById('clear').value='';
      document.getElementById('clears').value='';
     
  }
  return (
      <>
      <form onSubmit={onSubmit}>
          <div className='forms_heading'>
            <h1>Hello {fullName}{password}</h1>
            <input id="clear" type="text" placeholder="Enter Your Name" onChange={inputEvent} value={name}/>
            <input id="clears" type="password" placeholder="Enter Your Password" onChange={passEvent} value={pass} />
            <button type='submit'>Click Me 👍🏻</button>
          </div>
        </form>
      </>

  )
}

export default Forms;
