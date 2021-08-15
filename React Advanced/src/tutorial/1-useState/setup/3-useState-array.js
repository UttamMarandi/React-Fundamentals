import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  
  const [people , setPeople] = React.useState(data)
  //if we are not importing useState , then we can access it using React.useState()
  
  const deleteItem = (id) => {
    let newpeople = people.filter((person) => {
      if (person.id !== id){
          return id
      }
      //here != b.c we don't want the name for which button is clicked, instead we want all the other elements , so that we can render them out leaving this behind
    })
    console.log(newpeople);
    setPeople(newpeople)
     
  }

  return (
    <>
      {people.map((person) => {
        const {id,name} = person
        return(
          <>
          <div key = {id} className = "item"></div>
            <h4>{name}</h4>
            <button className="btn" onClick = {()=> deleteItem(id)}>Delete Name</button>
          </>
        )
        
      })}
      <button className="btn" onClick={()=>setPeople([])}>clear items</button>
      {/* we can directly call the setPeople and pass an empty array to delete all the items. We need to set up an arrow function id we want to pass a value to the function */}

    </>
  )

};

export default UseStateArray;
