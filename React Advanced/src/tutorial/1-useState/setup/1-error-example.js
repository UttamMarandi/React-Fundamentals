import React from 'react';

const ErrorExample = () => {
  let title = "Hello there , I am Uttam"
  const handleClick = () => {
    title = "How can I help you?"
    console.log(title);
  }
  return(
    <>
    <h2>{title}</h2>
    <button className= "btn" onClick={() =>{handleClick()}}>Change title</button>
    </>
  )
};

export default ErrorExample;
