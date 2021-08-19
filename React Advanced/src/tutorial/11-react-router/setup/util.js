import React from 'react';
// react router
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
// pages
import Home from "./Home"
import About from "./About"
import People from "./People"
import Person from "./Person"
import Error from "./Error"
// navbar
import Navbar from './Navbar';

//for big application we wrap the whole application within router and  

const ReactRouterSetup = () => {
  return (
  <Router>
    {/* Define routes : the path props defines the sub url /about /home specific to the page. then within route specify the component that you want to display */}
    {/* If the path matches , it will display the components mentioned 
    use exact props to for only exact urls paths to be shown
    */}
    {/* path = "*" means it will always match , meaning if no path exist for the url then that component is shown */}
    {/* <Switch/> component : Only the first path that is shown is matched */}
    <Navbar/>
    {/* navbar above switch b.c it neeeds to be shown in all pages */}
    
        <Switch>
          <Route exact path = "/"> 
              <Home/>
          </Route>
          <Route  path = "/about"> 
              <About/>
          </Route>
          <Route path = "/people"> 
              <People/>
          </Route>
          <Route path ="*">
              <Error/>
          </Route>
        </Switch>
    
  </Router>)
};

export default ReactRouterSetup;
