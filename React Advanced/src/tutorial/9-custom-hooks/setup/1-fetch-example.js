import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

//custom hooks allow us to reuse the functionality 


// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {

  const {loading , products} = useFetch(url)
  // useFetch is our custom hooks ,
  //the functiolity of useFetch is not dependent on the component , we can just use fetch by paasing the url
  //we need to name the fetch hook with prefix use , as in react a function can be a component and custom hooks

  console.log(products)
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example
