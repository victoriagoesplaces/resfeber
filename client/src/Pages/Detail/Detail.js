import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row } from 'react-materialize';
import { Col } from 'react-materialize';
import API from "../../utils/API";
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
            <h4>
              {this.state.activity.title} in {this.state.activity.location}
            </h4>
          </Col>
        </Row>

        <Row>
          <Col s={12}>
            <article>
              <h4>Notes</h4>
              <ul>
                {this.state.activity.URL}
                {this.state.activity.price}
                {this.state.activity.notes}
              </ul>
            </article>
          </Col>
        </Row>

        <Row>
          <Col s={12}>
            <Link to="/activities">← Back to activities</Link>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Detail;
