import React, { Component } from 'react';
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import NavbarMain from '../../components/NavbarMain';

import './Landing.css';


class Landing extends Component {
    render() {
        return (
            <div>
                <NavbarMain/>
                <h1 className="welcome"> Welcome to Resfeber</h1>
                <div className="row buttonMain">
                    <div className="col s5"></div>
                    <div className="col s2">
                        <Button ><Link className="button" to="/about">Learn More</Link></Button>
                    </div>
                    <div className="col s5"></div>
                </div>
            </div>
     )}
}

export default Landing;