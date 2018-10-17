import React, { Component } from 'react';
// import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { Link } from "react-router-dom";


class Landing extends Component {
    render() {
        return (
            // <div>
            //     <Navbar/>
                <div>
                    {/* <div className="imgLanding" background='./images/worldMap.png'></div> */}
                    <h1> Welcome to Resfeber</h1>
                    <Button><Link to="/signup">Sign Up</Link></Button>
                    <br/>
                    <Button><Link to="/login">Log In</Link></Button>
                </div>
                
            // </div>
     )}
}

export default Landing;