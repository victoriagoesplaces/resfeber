import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Landing from "./Pages/Landing";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/login" component={LogIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route component={Dashboard}/>
          
        </div>
      </Router>
  
    );
  }
}

export default App;
