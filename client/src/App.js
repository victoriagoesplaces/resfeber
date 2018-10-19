import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./Pages/About";
import Activities from "./Pages/Activities";
import Landing from "./Pages/Landing";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Detail from "./Pages/Detail";
import LogOut from "./components/logout"

import PrivateRoute from "./components/PrivateRoute";
import app from "./components/base";

class App extends Component {
  state = { loading: true, authenticated: false, user: null};

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

  render() {
    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/logout" component={LogOut} />
          {/* <Route component={Landing} /> */}
     

          <PrivateRoute
            exact
            path="/activities"
            component={Activities}
            authenticated={authenticated}
          />
          <PrivateRoute
            exact
            path="/activities/:id"
            component={Detail}
            authenticated={authenticated}
          />
        </div>
      </Router>

    );
  }
}

export default App;
