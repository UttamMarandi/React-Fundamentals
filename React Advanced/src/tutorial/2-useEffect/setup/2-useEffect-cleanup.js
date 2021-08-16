import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

  const UseEffectCleanup = () => {
  const [size , setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener("resize", checkSize)
    //resize event is called every time window is resized
    //here render is triggered by setSize() the moment resize event is called
    //but this is a major problem , as we are having multiple resize calls which can cause memory leak

    //check for memory leak
    console.log("useEffect");
    //we log a large no of hello world b.c the component is re-rendered each time the window is resized. this can consume a lot of memory , NOT GOOD
    //we can check in ELements -> EventListener tab that resize has multiple event
    //this is where cleanup function come into play

    return(
      ()=> {
        console.log("cleanup");
        window.removeEventListener("resize",checkSize)
      }
    )
    //cleanup function is callback function which is returned to useEffect
    //clean up function is called before calling useffect in the next re-render
    //initial render happens without calling cleanup function , but then every next re-render will call clean up first
    //what this does is it removes the first resize event before triggering the next
    //we can check in ELements -> EventListener tab that resize has only one event

    //for this case we can pass an empty array to useEffect as 2nd parameter to get the same effect b.c useEffect only runs once during intial page load. however resize event is called multiple times maintaining our functionality
  })
  console.log("render");
  // console.log("size of window",size);
  return (
    <>
    <h2>useEffect cleanup</h2>
    <h1 style = {{marginTop : "50px"}}>Window</h1>
    <h3>{size}PX</h3>
    </>
  )
};

export default UseEffectCleanup;
