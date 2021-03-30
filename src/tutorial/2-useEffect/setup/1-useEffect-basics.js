import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // werkt elke keer als er op de btn wordt geklikt, omdat de meegegeven array nie leeg is
  useEffect(()=>{
    if(value>=1){
      document.title = `New Messages (${value})`
    }
  }, [value]);

  // werkt maar 1 keer on page load, array is leeg
  useEffect(()=>{
    console.log('hello world')
  }, [])

  return(
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={()=> setValue(value+1)}>Click me!</button>
    </>
    )
};

export default UseEffectBasics;
