import React, { Component } from "react";
import { withRouter } from "react-router";
import app from "../../components/base";

import SignUp from "./SignUp";

class SignUpContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/activities");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <SignUp onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(SignUpContainer);