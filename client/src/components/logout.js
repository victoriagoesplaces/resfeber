import React, { Component } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base";

class LogOut extends Component {
  constructor() {
      super()
      this.state = {
          redirect: false
      }
  }

  componentWillMount() {
      app.auth().signOut().then((user) => {
          this.setState({ redirect: true })
      })
  }

  render() {
    if (this.state.redirect === true) {
        return <Redirect to="/" />
    }
    return (
        <h3>Logging Out</h3>
    )
    
  }
}

export default withRouter(LogOut);