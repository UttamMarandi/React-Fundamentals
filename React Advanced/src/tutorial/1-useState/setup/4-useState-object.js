import React, { useState } from 'react';

const UseStateObject = () => {
  const [person , setPerson] = useState({name : "Uttam", age : 22, message : "random message"})
  //we can pass object directly into use state instead of a variable
  const changeMessage = () => {
    // setPerson("helo world")
    //on clicking changemessage we are not rendering "hello world " to ui b.c "hello world" is a string and person is a object
    //the solution is to use a spread operator

    setPerson({...person ,message : "Hello World"})
    //setPerson is just a function that shows the content when an event is triggerd
    //spread operator fisrt , then overwrite message
    //by using spread operator , we are spreading each key of person and explicitly defining the message.,the rest of key and values are present in ...person
    console.log("person",person);
  }
  //get specific useState for each key

  let [name , setName] = useState("Uttam")
  let [age, setAge] = useState(23)
  let [message, setMessage] = useState("random message")

  return (
    <>
    <h2>useState object example</h2>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className="btn" onClick={()=> changeMessage()}>change message</button>

    {/* specific use state */}
    <h2>Specific useState</h2>
    <h3>{name}</h3>
    <button className="btn" onClick={()=>{setName("Joey")}}>change Name</button>
    <h3>{age}</h3>
    <button className="btn" onClick={()=>{setAge(32)}}>change Age</button>
    <h3>{message}</h3>
    <button className="btn" onClick={()=>{setMessage("How u doing?")}}>change Message</button>
    </>
  );
};

export default UseStateObject;
