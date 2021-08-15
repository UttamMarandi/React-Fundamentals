import React from 'react'
// import Setup from "./tutorial/1-useState/setup/1-error-example"
import Setup2 from "./tutorial/1-useState/setup/2-useState-basics"


function App() {
  return (
    <div className='container'>
      {/* <Setup/> */}
      {/* The reason we use Setup is b.c ErrorExample component is set as default export so we can name it anything we want during import and has to use that specific name */}
      <Setup2/>
      
    </div>
  )
}

export default App