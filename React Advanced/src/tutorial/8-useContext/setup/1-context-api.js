import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

//useContext
const PersonContext = React.createContext()
//after defining the context using createContext , now we have access to two components Provider and Consumer
//but now we don't use consumer anymore
//access Provider : PersonContext.Provider
//Provider is like a distributer
//first we wrap the return of root comopnent in this case ContextAPI within PersonContext.Provider
//we can pass any prop to PersonContext.Provider and pass value to the prop  and access it using useContext
//access value : useContext(PersonContext), this code will go in the component where we want to access the value
//In this way we can pass values from top level components to lower levels without actually doing prop drilling


const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
      <PersonContext.Provider value = {{removePerson , people} }>
        {/* value prop takes two objects . so value reference to object of objects containing removePeson and people */}
        {/* removePerson is a function that is passed and used in singlePerson component */}
        <h3>Context API / useContext hook</h3>
        <List />
      </PersonContext.Provider>
      
    </>
  );
};

const List = () => {

  const mainData = useContext(PersonContext)
  console.log("mainData",mainData);
  console.log("maiData.people", mainData.people);
  console.log("mainData.removePerson", mainData.removePerson);
  console.log("mainData.removePerson.id",);

  return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
           
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {

  let {removePerson} = useContext(PersonContext)
  // by destructuring we are only accesing removePerson funciton from useContext(PersonContext) which also contains the people object
  console.log("data from PersonContext", {removePerson});
  //logs 4 hellos
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
