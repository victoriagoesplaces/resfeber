import React, { Component } from 'react';
import {Carousel} from 'react-materialize'
import Footer from '../../components/Footer';


class About extends Component {
    render() {
        return (
            <div>
            <Carousel className="carousel"  images={[
                './images/option1.jpg',
                './images/option2.jpg',
                './images/option3.jpg',
                './images/option4.jpg',
                './images/option5.jpg'
              ]} />
            <Footer/>
            </div>
     )}
}

export default About;