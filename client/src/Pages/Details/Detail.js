import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Row} from 'react-materialize'

import API from "../../utils/API";

class Detail extends Component {
  state = {
    activity: {}
  };
  // When this component mounts, grab the activity with the _id of this.props.match.params.id
  // e.g. localhost:3000/activities/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getActivity(this.props.match.params.id)
      .then(res => this.setState({ activity: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Row>
              <h1>
                {this.state.activity.title} in {this.state.activity.location}
              </h1>
      
        </Row>
        <Row>
         
            <article>
              <h1>notes</h1>
              <p>
                {this.state.activity.notes}
              </p>
            </article>
       
        </Row>
        <Row>
          
            <Link to="/">← Back to activities</Link>
    
        </Row>
     
      </div>
    );
  }
}

export default Detail;
