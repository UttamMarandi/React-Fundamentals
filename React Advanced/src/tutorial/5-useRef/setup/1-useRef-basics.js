import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

//useRef like useState preserves value but doesnot trigger re-render
//most used for targetting DOM elements
const UseRefBasics = () => {

  const refContainer = useRef(null)
  const divContainer = useRef(null)

  console.log(refContainer);
  //refContainer is an object with a key of current whick hold null value
  //it's paramter is the initial current value

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("log input value using useRef",refContainer.current.value);
    //logs the value of input
    console.log("div container", divContainer.current);
    //logs the h2 html element
  }
  useEffect(()=>{
    console.log(refContainer.current);
    refContainer.current.focus()
    //focus the input form on load
    //even if we use useEffect it will not re-render , b.c we are using useRef instead of useState. so useEffect will run on intial load only
  })

  return (
    <>
    <form className="form" onSubmit = {handleSubmit}>
      <div>
        <input type="text" ref={refContainer}/>
        <button type="submit" className="btn">submit</button>
      </div>
    </form>
    <h2 ref={divContainer}>Hi, I am Uttam</h2>
    </>
  );
};

export default UseRefBasics;
