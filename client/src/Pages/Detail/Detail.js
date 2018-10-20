import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row } from 'react-materialize';
import { Col } from 'react-materialize';
import { Card } from 'react-materialize';
import API from "../../utils/API";
import './Detail.css';

// import Link from "../../components/Button";

class Detail extends Component {
  state = {
    activity: {}
  };

  componentDidMount() {
    API.getActivity(this.props.match.params.id)
      .then(res => this.setState({ activity: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Row>
          <Col s={12}>
            <h4 className="detailTitle">
              {this.state.activity.title} in {this.state.activity.location}
            </h4>
          </Col>
        </Row>

        <Row>
          <Col s={1}></Col>
          <Col s={10}>
            <Card class="detailCard">
              <h4>Notes</h4>
              <li>URL: <a href={this.state.activity.URL}>{this.state.activity.URL}</a></li>
              <li>Price: {this.state.activity.price} </li>
              <br/>
              <li>Notes: {this.state.activity.notes}</li>

              <Link className="linkActivity" to="/activities">← Back to activities</Link>
            </Card>
          </Col>
          <Col s={1}></Col>
        </Row>

        {/* <Row>
          <Col s={12}>
           
          </Col>
        </Row> */}

      </div>
    );
  }
}

export default Detail;
