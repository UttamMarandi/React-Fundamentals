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


///SESSION 2 :Iteration 2
//CREATE A BOOKLIST



//vars
const title = "Word Power Made Easy : using variable"
const imgur = "https://images-eu.ssl-images-amazon.com/images/I/818e%2Bfq7%2BBL._AC_UL200_SR200,200_.jpg"
const author = "Norman Lewis : using variable"

//use object for second book
const secondBook = {
    title : "Billy Summers",
    author : "Stephen King",
    imgur : "https://images-na.ssl-images-amazon.com/images/I/51vSbWpF+dS._SY344_BO1,204,203,200_.jpg",
}

const thirdBook = {
    title : "Atomic Habits",
    author : "James Clear",
    imgur : "https://images-na.ssl-images-amazon.com/images/I/51EU9naCcwL._SX325_BO1,204,203,200_.jpg",
}

function BookList() {
    return(
        <section className= "booklist"> 
            <Book/>
            <Book/>
            <Book2/>
            <Book2/>
    
            <Book3 title = {secondBook.title} imgur = {secondBook.imgur} author = {secondBook.author}>
             <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure neque omnis necessitatibus sunt in sint dolores consequuntur officia, facilis, excepturi fuga labore doloribus totam error praesentium hic nulla laudantium?
            </p>
            </Book3>
           
            <Book3 title = {thirdBook.title} imgur = {thirdBook.imgur} author = {thirdBook.author}/>
            {/* use array of objects as Books data */}
            {newName}

            {/* use an object for books data */}
            {books.map((book)=>{
                // const{ author, title, imgur, key} = book
                console.log("book id", book.id);
                return (
                    // Instead of returning jsx we can also return a component
                    //Also we can pass book object{book} as a book parameter to <Book4/> component
                    
                    <Book4 key={book.id} book = {book}>
                            
                    </Book4>
                )
            })}
            {/* use destrucuting for book */}
            {books.map((book)=>{
                return(
                    <Book5 key ={book.id} {...book}> 

                    </Book5>

                )
            })}
            
            
            
        </section>
    )
}
//age = {22} b.c we are entering into js world to access number
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
        <img src="https://images-eu.ssl-images-amazon.com/images/I/818e%2Bfq7%2BBL._AC_UL200_SR200,200_.jpg" alt = " " />
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


//Iteration 2
//Create book type2 and remove nested components and add img, title, and name in one compnoent


const Book2 =() => {
    
    return(
        <article className="book">
            <img src={imgur} alt="img" />
            <h2>{title}</h2> 
            <h3>{author.toUpperCase()}</h3>

        </article>
    )
}
//acess variable within jsx using {} braces
//but we can't use statements like assigments within {} b.c it is within return

//Iteration 3
//Create Book3 and add parameter to make book more dynamic

const Book3 =({imgur,author,title, children}) => { //props value is set up in the place where the component is used
    
    //destructuring props
    // const {imgur , author , title} = props
    //we can do the above directky in parameter

    return(
        <article className="book">
            <img src={imgur} alt="img" />
            <h2>{title}</h2> 
            <h3>{author}</h3>
            {children}
            {/* In order to access content within the comopnent , we use {children} property..Name has to be children */}
        </article>
    )
}
//for the values that we have passed , we can access them using props.key
//only the component that passed the key=value can access it 

//SESSION 3 
//Iteration 4
//Use array of objects for as data for bookilst

const books = [
     {
    id : 1,
    title : "Billy Summers",
    author : "Stephen King",
    imgur : "https://images-na.ssl-images-amazon.com/images/I/51vSbWpF+dS._SY344_BO1,204,203,200_.jpg",
},
{
    id : 2,
    title : "Atomic Habits",
    author : "James Clear",
    imgur : "https://images-na.ssl-images-amazon.com/images/I/51EU9naCcwL._SX325_BO1,204,203,200_.jpg",
},
{   id : 3,
    title : "The Psychology of Money",
    author : " Morgan Housel",
    imgur : "https://images-eu.ssl-images-amazon.com/images/I/41cWqh0OeQL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",   
}
]
//iterate over an  array and render in ui
const names = ["uttam","tommy","tarun"]
const newName = names.map((name)=> {
    console.log(name);
    return (
        <h2>{name}</h2>
    )
})
console.log(newName);
const Book4 =(props) => { //here props is an object that contains the book obj
    const {imgur,author,title} = props.book //props.book b.c book is an object with props object
    console.log("props if we don't use destructuring",props);
    return(
        <article className="book">
            <img src={imgur} alt="img" />
            <h2>{title}</h2> 
            <h3>{author}</h3>
        </article>
    )
}


//Iteration 5
//Use destructuring for book object

const Book5 = (props) => { //here props is not the object but all the properties i.e object inside the object , so we can access them directly
    console.log("props if we use destructuing",props);
    const {author,title,imgur} = props
    return(
        <article className="book">
            <img src={imgur} alt="img" />
            <h2>{title}</h2> 
            <h3>{author}</h3>
        </article>
    )
} 




ReactDom.render(<BookList/> , document.getElementById("root"))
