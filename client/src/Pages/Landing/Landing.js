import React, { Component } from 'react';
import Button from "../../components/Button";
import { Link } from "react-router-dom";

import './Landing.css';


class Landing extends Component {
    render() {
        return (
            <div>
                <h1 className="welcome"> Welcome to Resfeber</h1>
                <div className="row buttonMain">
                    <div className="col s5"></div>
                    <div className="col s1">
                        <Button ><Link className="button" to="/signup">Sign Up</Link></Button>
                    </div>
                    <div className="col s1">
                        <Button ><Link className="button" to="/login">Log In</Link></Button>
                    </div> 
                    <div className="col s5"></div>
                </div>
            </div>
     )}
}

export default Landing;