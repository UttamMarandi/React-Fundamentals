import { useState, useEffect } from 'react';

export const useFetch = (url) => {

  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [url])
  //get products method is called on initial load or when we change the url ,

  //in order to convert a functionaliity to a custom hook , first we need to copy the component code except the return statment into our custom functin=on.
  //then it needs to return the useState values i.e loading and url
 
  return ({loading , products})
  //we are passing an object containg loading and products to the component
};
