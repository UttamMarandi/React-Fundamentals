import React, { useState } from 'react';
import {data} from "../../../data"

// more components
// fix - context api, redux (for more complex cases)

//below we have a situation where there is component inside a component inside a component. Suppose we define a funciton for the lowest component ,now how can the lowest component access the function. This is where pop drilling comes into play

//we can pass objects and functions as props to components
//solution : we pass down the function from upper components to lower components even if we don't use the function in upper components
//we can avoid prop drilling using redux and context API

const PropDrilling = () => {
  const [people , setPeople] = useState(data)

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person)=> {
        return person.id !== id
      })
    })
  }

  return (
    <>
    <section>
    <h3>prop drilling</h3>
    <List people = {people} removePerson = {removePerson} />
    </section>
    </>
  );
};
// destructure remove person
const List = ({people , removePerson}) => {
  return (
    <>
    {people.map((person)=>{
        return (
          <>
          <SinglePerson key = {person.id} {...person} removePerson = {removePerson}/>
          </>
        )
    })}
    </>
  )
}

// people is an array of objects , person is an object

const SinglePerson = ({id , name, removePerson}) => {
  return (
    <>
    <div className = "item ">
      <h4>{name}</h4>
      <button className="btn" onClick = {()=> {removePerson(id)}}>remove</button>
    </div>
    </>
  )
}

export default PropDrilling;
