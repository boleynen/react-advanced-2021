import React from 'react';

const ErrorExample = () => {
  let title = 'random title'
  const handleClick = () =>{
    title = 'hello people'
    console.log('hello people')
  }
  return(
    <>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}>Change title</button>
    </>
  )
};

export default ErrorExample;
