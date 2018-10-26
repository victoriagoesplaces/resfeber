import React, { Component } from 'react';
import NavbarAbout from '../../components/NavbarAbout';


class About extends Component {
    render() {
        return (
            <div>
                <NavbarAbout />
                <div className="row">
                    <div className="col s1"> </div>
                    <div className="col s10">
                        <div className="detailCard card z-depth-0">

                            <div className="card">
                                {/* <div className="carousel" >
                                    <a className="carousel-item" href="#one!"><img src="/images/option1.jpg" alt="imgOne"/></a>
                                    <a className="carousel-item" href="#one!"><img src='./images/option2.jpg' alt="imgTwo"/></a>
                                    <a className="carousel-item" href="#one!"><img src='./images/option3.jpg' alt="imgThree"/></a>
                                    <a className="carousel-item" href="#one!"><img src='./images/option4.jpg' alt="imgFour"/></a>
                                    <a className="carousel-item" href="#one!"><img src='./images/option5.jpg' alt="imgFive"/></a>
                              </div> */}
                            </div>
                            <div className="col s1"> </div>
                        </div>
                    </div>
                </div>
            </div>
                )}
           }
           
export default About;