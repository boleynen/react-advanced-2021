import React, { useState } from 'react';

const UseStateObject = () => {
  
  // const [person, setPerson] = useState({
  //   name: 'Peter', 
  //   age: 24, 
  //   message: 'I am Peter!'
  // });

  const [name, setName] = useState('Peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('I am Peter!')
  
  const changeMessage = () =>{
    // setPerson({...person, message: 'Hello World!'})
    setName('Anne')
    setAge(32)
    setMessage('Hello everyone!')
  }

  return(
    <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className="btn" onClick={changeMessage}>Change message</button>
    </>
  )
};

export default UseStateObject;
