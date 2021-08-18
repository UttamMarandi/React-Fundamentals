// reducer function


export const reducer = (state , action) => {
  console.log("state in reducer", state);
  
  if(action.type ==="ADD_ITEM") {
    const newPeople = [... state.people , action.payload] 
    
    return {...state , people : newPeople , isModalOpen : true , modalContent : "item added"}
  }
  //if no value passed by user than , set modalOpen to true and modalContent to please enter value
  if(action.type === "NO_VALUE") {
    return({...state , isModalOpen : true , modalContent : "please enter value"})
  }
  //close the modal by setting isModalOpen to false
  if(action.type === "CLOSE_MODAL"){
    return ({...state , isModalOpen : false})
  }
  //filter the item that is passed on onclick and return rest of items
  if(action.type ==="REMOVE_ITEM") {
    const newPeople = state.people.filter((person)=> {
      if(person.id !== action.payload) {//payload holds the id value of person
        return person
      }
    })
    return ({...state , people : newPeople})


  }

  throw new Error ("no matching action type")
}