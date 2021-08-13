import React from "react" //this code not specific to react app
import ReactDom from "react-dom" //need to use .render() method

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
//we can use React.Fragment (<> </>) to not add any additonal div
//<> </> are React.Fragment
function Greeting() {

  return (
  <> 
    <div>
        <h2>Hello there, this is uttam</h2>
        <ul>
            <li>
                <a href="asombrosodesign.com">Check my website</a>
            </li>
        </ul>
    </div>
 </>
 
 
//   <div>//not possible
//       <h2>how</h2>
//   </div>
  )
  //as long as one div within return it is okk.
 
}


ReactDom.render(<Greeting/> , document.getElementById("root"))

//Greeting is a stateless functional component meaning it has no state
//we always return JSX

//.render() takes two parameter , a.the component which needs to render. b.the place where it needs to be rendered
