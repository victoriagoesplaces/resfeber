import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row } from 'react-materialize';
import { Col } from 'react-materialize';
import Footer from '../../components/Footer';
import Navbar from "../../components/Navbar";
// import Button from "../../components/Button";
import API from "../../utils/API";
import './Detail.css';

class Detail extends Component {
  state = {
    activity: [],
  };

  componentDidMount() {
    API.getActivity(this.props.match.params.id)
      .then(res => this.setState({ activity: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
         <Navbar />
        <Row>
          <Col s={1}></Col>
          <Col s={10}>
            <div className="detailCard card z-depth-0">
              <h4 className="detailTitle">{this.state.activity.title}</h4>
              <h5 className="detailLocation">{this.state.activity.location}</h5>
              <ul><img className="activityImg" src={this.state.activity.imageURL} alt="activity"></img></ul>
              <li>URL: <a href={this.state.activity.URL}>{this.state.activity.URL}</a></li>
              <li>Price: ${this.state.activity.price} </li>
              <br/>
              <li>Notes: {this.state.activity.notes}</li>
            
              <Link className="linkActivity" to="/activities">← Back to activities</Link>
            </div>
          </Col>
          <Col s={1}></Col>
        </Row>
        <Footer/>
      </div>
    );
  }
}

export default Detail;
