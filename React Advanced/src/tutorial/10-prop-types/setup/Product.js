import React from 'react';
import PropTypes from "prop-types"
import defaultImage from "../../../assets/default-image.jpeg"

const Product = ({image , name , price }) => {

  const url = image && image.url
  //problem with image.url || defaultImage is that if Image is not there , then image.url returns undefenied. and OR compares between true and false
  //so we need to check for image obj and then check for image.url  using image && image.url

  return <article className='product'>
    <img src={url || defaultImage} alt="" />
    <h4>{name || "default value"}</h4>
    {/* acces name if name not present then "default value" */}
    <p>${price || 4.99}</p>
    {/* price value is obtained from an API. Now in some situation api will not give will you any value. In that case no value will be shown. Also we are getting an error not an empty value while accessing image url.This is b.c url value is present inside an object in our API. So when we try to access it using image.url it shows no value  */}
    {/* In such cases we need to use PropTypes so that checks if any value is missing from the api and also set some default values */}
  </article>;
};
//we need to define a propTypes object that takes all imported keys from api and make them isRequired.
//syntax : PropTypes.(data type).isRequired
//this will give us a warning in console instead of our app being crashing

// Product.propTypes = {
//   image : PropTypes.object.isRequired,
//   name : PropTypes.string.isRequired,
//   price : PropTypes.number.isRequired,

// }

//set up default props:- default prop is shown if the prop return no value from api

// Product.defaultProps = {
//   name : "default name",
//   price : 4.99,
//   image : defaultImage
//   // now the default Image will not work b.c it does not have a url property, it is an image
//   //so we need to use curcuit operators to get the defalut images
// }
//we can also logical operators/short circuit operators to get it done


//so PropTypes can be solved using logical operator

export default Product;
