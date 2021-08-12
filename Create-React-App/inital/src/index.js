import React from "react" //this code not specific to react app
import ReactDom from "react-dom" //need to use .render() method

function Greeting() { //Greeting is a component and component name has to start with capital letter

  return <h4>This is Uttam , Hello there</h4> //each component should return something genrally JSX
}

ReactDom.render(<Greeting/> , document.getElementById("root"))

//.render() takes two parameter , a.the component which needs to render. b.the place where it needs to be rendered
