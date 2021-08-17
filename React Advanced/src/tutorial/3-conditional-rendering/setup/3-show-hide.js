import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show , setShow] = useState(false)
  return (
  <>
    <button className="btn"onClick={()=>{setShow(!show)}}>Show/Hide</button>
    {show && <Item/>}
    {/* Show or hide a component using logical operator */}
  </>
  
  )
};

const Item = () => {
  const [size , setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener("resize",checkSize)

    return(()=> {
      window.removeEventListener("resize",checkSize)
    })
    // clean up funciton 
  })

  return(
    <>
    <div style = {{marginTop:"2rem"}}>
    <h1>Window</h1>
    <h2>size : {size} px</h2>
  </div>
    </>
  )
}

export default ShowHide;
