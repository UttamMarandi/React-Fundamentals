import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';

//useReducer hooks takes two parameters , a. the reducer function which takes the state and action as it's parameter , b. the defaultState
//useReducer hook  returns an array containig two elements state value and dispatch function.
//reducer function always return some type of state


const defaultState = {
  people : [],
  isModalOpen : false,
  modalContent : "hello World"
}

const Index = () => {
  const [people , setPeople] = useState("")
  // define a reducer
  const [state , dispatch] = useReducer(reducer , defaultState)
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if(name) {
      const newItem = {id : new Date().getTime().toString(),name : name}
      // dispatch always takes type key
     dispatch({type:"ADD_ITEM", payload: newItem})
     //set name back to empty string
     setName("")  
    }
    else {
      console.log("name in else ",name);
      dispatch({type : "NO_VALUE"})
    }
  }

  const closeModal =() => {
    dispatch({type: "CLOSE_MODAL"})
  }

  console.log("People",people);
  return (
    <>
    <h2>useReducer</h2>
    {/* if showmodal is true show the modal comopnent */}
    {state.isModalOpen && <Modal closeModal = {closeModal} modalContent = {state.modalContent}/>}
    <form className="form" onSubmit = {handleSubmit}>
      <div>
        <input type="text" value ={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button type = "submit" className="btn" >Add</button>
    </form>
    {state.people.map((person)=>{
      const {id , name } = person
      console.log("person",person);
      return(
        <>
        <div key = {id} className="item">
          <h4>{name}</h4>
          <button className="btn" onClick = {()=>{dispatch({type:"REMOVE_ITEM", payload : person.id})}}>Remove</button>
        </div>
        </>
      )
    })}
    </>
  )
};

export default Index;
