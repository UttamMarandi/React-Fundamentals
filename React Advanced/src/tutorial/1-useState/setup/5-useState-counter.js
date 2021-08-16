import React, { useState } from 'react';

const UseStateCounter = () => {
  let [value, setValue] = useState(0)

  const reset  = (value) => {
    setValue(0)
    console.log("value within reset", value);
  }

  const complexCounter = (value) => {
    
    setTimeout(()=>{
      // setValue(value + 1)
      //setValue increases the counter after 2s, but if we click multiple times within those 2s , the clicks are not registered
      //setFunction is an asynchronous function

      //in order to acces the state of value instead of value itself , we need to use a callback funciton which takes previous value as it's parameter, and returns the new value

      setValue((prevState)=> {
        console.log("prevstate",prevState);
        return prevState + 1
      })
      //this setup can be used for all our previous code
      //this renders the 1st click after 2s and then renders other clicks instateneously
        
    },2000)
  }

  return (
    <>
    <h2>useState counter example</h2>
    <section style={{margin : "4rem"}}>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={()=> {setValue(value - 1 )}}>decrease</button>
      {/* I also checked with value-- but the results were bit inconsistent , counter is decreased by one value per two clicks. I think this is b.c decrement/increment is a two step process */}
      <button className="btn"onClick = {()=> reset(value)}>reset</button>
      <button className="btn"onClick={()=> setValue(value +1)}>increase</button>

    </section>
    <section style={{margin : "4rem"}}>
      {/* we want a delay after the button is clicked */}
      <h2>Complex Counter</h2>
      <h1>{value}</h1>
      <button className="btn"onClick={()=> complexCounter(value)}>increase later</button>

    </section>
    </>
  )
};

export default UseStateCounter;
