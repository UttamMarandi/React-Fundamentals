import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

//by default useEffect basically runs the component after every re-render
//useEffect is used for running a code as a side effect outside the component . for ex- data fetching , sign up for subscription , listening for events
//useEffect also takes another paramter besides the callback function , an array containing a list of dependencies

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(()=>{
    console.log("call useffect")
    // change page title on each render
    // document.title = `New Mesages ${value}`
    //title changes to New Message value each time page is re-rendered
    //Note :- the first render also runs the useEffect , so the title is changed to New Messages 0

    //we want to change title to  New Message value only after the first increment
    //if it is empty[] , then useEffect runs only on the first render

    if (value > 0) {
      document.title = `New Mesages ${value}`
    }
    //we cannot use react hooks inside conditional , but we can use conditionals inside react hooks
  },[value]) //our code will not work if 2nd parameter is empty [], as it allows useEffect to run only on first render
  //but if the array has [value] , then useEffect runs only when re-render is caused by change in value , also including initial render

  //create useEffect which runs only once in initial render
  useEffect(()=> {
    console.log("Hello World");
  },[])

  console.log("render component")

  return (
  <>
  <h2>useEffect Basics</h2>
  <h1>{value}</h1>
  <button className="btn" onClick={()=>{setValue(value + 1)}}>CLick me</button>
  </>
  // the moment we click on the button the useEffectBasics component is run twice
  //this happened b.c useState while changing value triggered re-render
  )

}

export default UseEffectBasics;
