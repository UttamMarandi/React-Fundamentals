import React, { useState } from 'react';

//useState is a function coming from react , It is a named component . here React is default component


const UseStateBasics = () => {
  console.log(useState);
  //Note :- for a function if we write only the function name i.e useState than the function body is logged
  //but if we invoke a function i.e useState() then what the function returns is logged
  console.log(useState());
  console.log("content passed to useState",useState("hello World"));
  const value = useState("Hello world")
  console.log("value storing useState()",value);
  //we find that useState returns an array of two elements. 1. is the content that is passed to it as parameter. 2. is a function
  console.log("access parameter of useState", value[0]);
  console.log("access function of useState", value[1]);
  //the function controls the value
  //Basics done


  const [text , setText] = useState("random title")
  //by convention if the variable name is text , then funciton names has to be setText, if Tommy than function name setTommy
  //array destructuring
  //random title string is passed to useState, and it is stored in text variable

  const handleClick = () => {
    setText("Hello World")
    //so setText method changes the text value to anyting that is passed as it's parameter and also renders it in ui
    console.log("text value after setText",text);
    //interstingly text value is still "random title" , so setText does not change the value of text , instead only renders the content that is passed in place of Text
  }

  //create a method that toggles the string
  const toggle = useState("random title")
  let [data , setData] = toggle

  const toggleHandle = () => {
    if(data === "random title"){
      setData("Hello World")
    }
    else {
      setData("random title")
    }
  }

  return(
    <>
    <h2>One time change</h2>
    <h2>{text}</h2>
    <button className="btn" onClick={handleClick}>Change Title</button>
    <h2>Random Title Toggle</h2>
    <h2>{data}</h2>
    <button className="btn" onClick={toggleHandle}>Title Toggle</button>
    </>
  )

  
};

export default UseStateBasics;
