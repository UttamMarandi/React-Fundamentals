import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  // return "hello world"
  // The moment return statement is triggerd , the flow exits the function body
  //so the first return is rendered and also we don't receive any error

  //Conditional Rendering
  
  const [loading , setLoading] = useState(true)

  if(loading) {
    return <h2>Loading...</h2>
  }
  else{
    return <h2>multiple returns</h2>;
  }
  //conditional rendering
  
};

export default MultipleReturns;
