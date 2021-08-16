import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users,setUsers] = useState([])

  async function getUsers() {
    const response = await fetch(url)
    const users = await response.json()
    console.log(users); //log array with 30 objects users
    setUsers(users)
    //we cannot do setUsers(users) b.c setfunction sets the new value and also triggers the re-render, which in case will call useEffect again.
    //so this will create an infinite loop
    //the soultion is to add a dependency array as paramete to useEffect
    //in this case an empty array b.c then useEffect will run only once during initial load
  }

  useEffect(()=>{
    getUsers()

  },[])

  //we cannot make the callback function in useEffect asynchronous, it's b.c useEffect expects a cleanup funciton instead of a promise
  //however we can use async code inside the callback fucnction
  console.log("users",users);

  return (
    <>
    <h2>fetch data</h2>
    <h3>github users</h3>
    <ul className= "users">
      {users.map((user)=>{
      const {id, login, avatar_url,html_url} = user
      return(
        <>
        <li key={id} >
          <img src={avatar_url} alt="" />
          <div>
            <h4>{login}</h4>
            <a href={html_url}>Profile</a>
          </div>
        </li>
        </>
      )
      
      })}
    </ul>
    
    </>

  )
};

export default UseEffectFetchData;
