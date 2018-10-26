import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Row } from 'react-materialize';
// import { Col } from 'react-materialize';
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
        <div className="row">
          <div className="col s2"> <Link className="linkActivity" to="/activities">← Back to activities</Link></div>
          <div className="col s8">
            <div className="detailCard card z-depth-0">
             
              <div className="row">
              <div className="col s6">
                  <h4 className="detailTitle">{this.state.activity.title}</h4>
                  <h6 className="detailLocation">{this.state.activity.location}</h6>
                  <ul>Price: ${this.state.activity.price} </ul>

                  <a href={this.state.activity.URL} target="__blank"> {this.state.activity.URL}</a>
                  {/* <div>URL: <a href={this.state.activity.URL}> {this.state.activity.URL}</a></div> */}
                  <ul>Notes: {this.state.activity.notes}</ul>
                </div>
              

                <div className="col s6">
                  <img className="activityImg" src={this.state.activity.imageURL} alt="activity"></img>
                </div>
                </div>
        

             

            </div>
          </div>
          <div className="col s2"></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Detail;
