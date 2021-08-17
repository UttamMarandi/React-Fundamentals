import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

//if we have multiple inputs say 50 it becomes difficult to maintain state of each one them using controlled inputs
//It's good to have one onChange function regardless of the input 

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState("");
  //here we need to create three useState to for each input. 

  //pass one object to useState containing the name , mail and age as keys
  const [person , setPerson] = useState({firstName:"", email : "", age: ""})
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    //access the name and value attribute of target object
    const name = e.target.name 
    const value = e.target.value
    console.log(name , value); //logs the clicked input name and value
    //use dynamic object keys
    setPerson({...person , [name] : value}) //here first anything that is already stored in person is stored back using spread operator and [name] is a dynaic object key which changes according to the input 

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    //submit the form 
    if(person.firstName && person.email && person.age) {
      const newPerson = {...person , id : new Date().getTime().toString()}
      console.log("new Person submitted", newPerson)
      setPeople([...people, newPerson])
      console.log("people after submission",people);
      //set the object in person back to empty string
      setPerson({firstName:"", email: "", age : ""})
    }
  }

 
  return (
    <>
      <article>
        <form className='form' >
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit'onClick = {handleSubmit}>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email,age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
              
              
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
