import React from 'react'


//Iteration 6
//Set up an event

const Book6 = (props) => { 
    const {author,title,imgur} = props
    const clickHandler = (e) => { //reference example
        alert("book selected")
        console.log(e); //e is event object
        console.log(e.target); ///e.target shows the html element that is clicked
        
    }
    const complexExample = (e,author) => {
        console.log(author); //author gets logged the moment DOM is rendered. this is not expected for a click event
        //If we have to pass an argument to our reference function then we must wrap it inside an arrow function in onClick statement
        
    }

    return(
        //on hover over article , log the title
        <article className="book" onMouseOver = {()=>{
            console.log(title);
        }}>
            <img src={imgur} alt="img" />
            <h2 onClick={()=> console.log(title)}>{title}</h2> 
            <h3>{author}</h3>
            <button type="button" onClick={clickHandler}>Clcik Me : Reference example</button>
            <button onClick={()=> alert("book selected inline")}>Click Me Inline example</button>
            {/* Inline example */}
            <h2></h2>
            <button type="button" onClick={()=>complexExample(author)}>More Complex example</button>
            {/* //If we have to pass an argument here (author) to our reference function then we must wrap it inside an arrow function in onClick statement */}
        </article>
    )
} 

export default Book6
