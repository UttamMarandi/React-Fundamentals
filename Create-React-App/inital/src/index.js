import React from "react" //this code not specific to react app
import ReactDom from "react-dom" //need to use .render() method

//CSS
import "./index.css"



//SESSION1

// function Greeting() { //Greeting is a component and component name has to start with capital letter

//   return (
//   <div>
//   <h4>Hello there, this is uttam</h4>
//   </div>)
//   //use parenthesis if using "enter" after return
//    //each component should return something genrally JSX
// }

//we can use noraml method in place of JSX too , but JSX is easy

// const Greeting = () => {
//     return React.createElement("h1" , {} , "Hello there I am Uttam")
// }
//React.createElement takes three parameters a.html tag b.props object (not covered yet) c.The children i.e the content within the tag
//Works the same as JSX , but get's clumsy with long html
// add div on top of h1
//  const Greeting = () => {
//     return React.createElement("div", {}, React.createElement("h1",{},"Hello there , I am Uttam"))
// }
//if we want to add a div on top of h1 , then we have to React.createElement() as children again.
//this becomes tiring , so use JSX

//JSX RULES
//it always returns a single element , meaning return can't have two adjacent div . It can have only one
//we can use React.Fragment (<> </>) instead of  adding any additonal div
//<> </> are React.Fragment
//use CAMELCASE for html attribute , ex-onClick , as we are working on a JS file ..so need some kind of diff
//use className instead of class


//NESTED COMPONENTS , REACT TOOLS

// function Greeting() {

//   return (
//   <> 
//     <div>
//         <Person/>
//         <Message/>
//     </div>
//  </>
 
 
// //   <div>//not possible
// //       <h2>how</h2>
// //   </div>
//   )
//   //as long as one div within return it is okk.
 
// }

// const Person = () => <h2>John Doe</h2>
// const Message = () => {
//     return(
//         <p>this is my passage</p>
//     )
// }


// ReactDom.render(<Greeting/> , document.getElementById("root"))


//Greeting is a stateless functional component meaning it has no state
//we always return JSX

//.render() takes two parameter , a.the component which needs to render. b.the place where it needs to be rendered


///SESSION 2
//CREATE A BOOKLIST

function BookList() {
    return(
        <section className= "booklist"> 
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book2/>
            <Book2/>
            <Book2/>
            <Book2/>

        </section>
    )
}

const Book = () => {
    return(
        <article className="book">
            <Img/>
            <Title/>
            <Author/>
        </article>
    )
}
const Img = () => {
    return(
        <img src="https://images-eu.ssl-images-amazon.com/images/I/818e%2Bfq7%2BBL._AC_UL200_SR200,200_.jpg" alt="img" />
    ) 
}

const Title = () => {
    return(
        <h2>Word Power Made Easy Paperback</h2>
    )
}

const Author = () => {
    return(
        <h3 style={{ color: "#617d98",fontSize:"0.75 rem", marginTop:"1rem" }}>Norman Lewis</h3>
    )
}
//in order to add css in a jx file , we have to use style attribute and use double curly braces , one for entering js world and another for js object which will contain the css
//every css property is a key to an object in JS and as object has keys and values, values need to to wrapped in quotation mark
//all the css added in this way will be inline


//Create book type2 and remove nested components and add img, title, and name in one compnoent
const author = "Norman Lewis: using variable"
const Book2 =() => {
    const title = "Word Power Made Easy : using variable"
    return(
        <article className="book">
            <img src="https://images-eu.ssl-images-amazon.com/images/I/818e%2Bfq7%2BBL._AC_UL200_SR200,200_.jpg" alt="img" />
            <h2>{title}</h2> 
            <h3>{author}</h3>

        </article>
    )
}
//acess variable within jsx using {} braces
//but we can't use expression within {} b.c it is within return


ReactDom.render(<BookList/> , document.getElementById("root"))