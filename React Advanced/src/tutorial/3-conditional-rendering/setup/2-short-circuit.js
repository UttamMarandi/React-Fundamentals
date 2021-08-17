import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

//what if we want only one return statment but conditional rendering within one return.
//Now if() will not work as JSX can't evaluate an if expression, so we need to use short circuit evaluation
//that's where we use ternary operator 
//short circuit evaluation uses conditional operator to for conditional rendering

const ShortCircuit = () => {
  const [text,setText] = useState("")
  const [isError, setIsError] = useState(false)

  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
  console.log("test");

  return(
    <>
      {/* <h2>{firstValue}</h2>
      <h2>Value : {secondValue}</h2> */}

      {/* conditional rendering using logical OR operator */}
      <h2>{text || "John Doe using OR"}</h2>

      <button className="btn" onClick={()=> {setIsError(!isError)}}>toggle error</button>

      {/* logical AND */}
      {/* If error is true diplay Erro... */}
      {isError && <h2>Error...</h2>}
      <h2>{text && "John Doe using AND"}</h2>

      {/* conditional rendering using ternary operator */}
      <h2>conditional rendering using ternary operator</h2>
      {isError ? (<h2>There is an error</h2>) : (<h2>There is no error</h2>)}
    </>
  ) 
};

export default ShortCircuit;
