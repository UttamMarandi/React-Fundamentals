import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  // return "hello world"
  // The moment return statement is triggerd , the flow exits the function body
  //so the first return is rendered and also we don't receive any error

  //Conditional Rendering
  
  const [isLoading , setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState("default user")

  //create a conditinol rendering where if there is no error and loading is true , then render the user

  useEffect(()=>{
    // setimeout to see Loading... for long time
    setTimeout(()=>{
      fetch(url)
      .then((response)=>{ 
        if(response.status >=200 && response.status< 299){
          return response.json()
        }
        else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(response.statusText)
        }
      })
      .then((user)=>{
        const {login} = user
        setUser(login)
        setIsLoading(false)
      })
      .then((user)=> console.log(user))
      .catch((err) => console.log(err))
      },2000)
  },[])

  if(isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }
  if(isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    )
  }
  
  return(
    <div>
      <h2>{user}</h2>
    </div>
  )
 
  //conditional rendering

};

export default MultipleReturns;
