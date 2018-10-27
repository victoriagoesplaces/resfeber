import React, { Component } from 'react';
import NavbarAbout from '../../components/NavbarAbout';
import Button from "../../components/Button";
import { Link } from "react-router-dom";

import './About.css';

class About extends Component {
    render() {
        return (
            <div>
                <NavbarAbout />
                <div className="row">
                    <div className="col s1"> </div>
                    <div className="col s10">
                        <div className="detailCard card z-depth-0">

                            <div>
                                <div className="aboutbox">
                                   
                                    <p className="sectionOne">Have you ever had that feeling of sudden adrenaline before a trip?
                                       <br /> or that excitement before traveling to a new destination?
                                    </p>

                                    <h2>Resfeber</h2>
                                <div className="sectionTwo">
                                    <p>
                                        It's the perfect planning app for your next trip.
                                       <br />
                                        <br /> Resfeber helps users to organize and have fun while planning their next adventure.
                                        <br />Not only you are able to keep any activities in one location,
                                        <br /> but allows you to add links, images, and notes to keep track of activities you are considering for your next destination.
                                        <br />
                                        <br /> Resfeber-Swedish; The restless race of the traveler's heart before the journey begins. When anxiety and anticipation are tangled together.
                                    </p>
                                    <Button ><Link className="button " to="/signup">Sign Up</Link></Button>
                                    </div>
                                </div>
                            </div>
                            <div className="col s1"> </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;