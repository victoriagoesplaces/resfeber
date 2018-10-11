import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Landing from "./Pages/Landing";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";

import PrivateRoute from "./components/PrivateRoute";
import app from "./components/base";

class App extends Component {
  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        }); 
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }
  
  render(){
    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          {/* <Route component={Landing} /> */}
          <PrivateRoute
            exact
            path="/dashboard"
            component={Dashboard}
            authenticated={authenticated}
          />
        </div>
      </Router>

    );
  }
}

export default App;
