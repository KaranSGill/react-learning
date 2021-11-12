import React, {useContext} from 'react'
import ComponentC from './ComponentC';
import { FirstName, LastName } from '../App';

// In this component we are using useContext  SEE COMPONENT C TO VIEW A DIFFERNCE IN BOTH USECONTEXT AND CONTEXT APIs
const ComponentB = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);
  return <h2>Hello my name is {fname} {lname}</h2>
}
export default ComponentB;
