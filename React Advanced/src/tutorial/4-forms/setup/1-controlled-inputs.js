import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value

// React
// value, onChange

//In order to access the input value we use useState to create value and onChange
//on input tag set the value to attribute to the useState value 
//now the value on form depends on the useState value
//set up onChange event on the input value.
//onChange event takes a callback function within which we call the setFunciton and set it to e.target.value 

const ControlledInputs = () => {
  
  const [firstName , setFirstName] = useState("")
  const [email,setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault() //we need to prevent thr browser's default funcitonality of submitting
    console.log("Hello world");
  } 
  //logs hello worldl on clicking "Add person" button

  const handleClick = (e) => {
    e.preventDefault() 
    console.log("Hello World from handleCLick");
  }
  console.log("firstName value",firstName);
  return (
    // In react we have two options , either we can add onSubit to form to submit the button, or we can add an onClick to the button within form tag
    //if we use onClick on form , then Hello World is logged the moment we click on any area of the form
    <>
    <h1>controlled inputs</h1>
    <article>
      <form className="form" onSubmit = {handleSubmit}>
      <div className="form-control">
        <label htmlFor="firstName">Name : </label>
        <input type="text" id="firstName" name = "firstName" value = {firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email : </label>
        <input type="text" id="email" name = "email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
      <button className="btn" onClick= {handleClick}>Add Person</button>
      </form>
    </article>
    </>
  );
};

export default ControlledInputs;
