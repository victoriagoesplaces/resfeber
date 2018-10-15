import React, { Component } from 'react';
import API from "../../utils/API";

import { Card } from 'react-materialize'
// import {CardTitle} from 'react-materialize'
import { Row } from 'react-materialize'
import { Input } from 'react-materialize'
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";


class Activities extends Component {
    state = {
        activities: [],
        title: "",
        location: "",
        notes: ""
    };

    componentDidMount() {
        this.loadActivities();
    }

    loadActivities = () => {
        API.getActivities()
            .then(res =>
                this.setState({ activities: res.data, title: "", location: "", notes: "" })
            )
            .catch(err => console.log(err));
    };

    deleteActivity = id => {
        API.deleteActivity(id)
            .then(res => this.loadActivities())
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.location) {
            API.saveActivity({
                title: this.state.title,
                location: this.state.location,
                notes: this.state.notes
            })
                .then(res => this.loadActivities())
                .catch(err => console.log(err));
        }
    };



    //formjs code
    render() {
        return (
            <div>
                <Navbar />
                <div className="row">
                    <div className="col s6" >
                        <Card className='extralarge'>
                            {/* header={<CardTitle image='./images/worldMap.png'>Card Title</CardTitle>} */}
                            {/* actions={[<a href='/Activities'>This is a Link</a>]}> */}
                            <Row>
                                <h4 className="center">Add new activity</h4>
                              
                                <div>
                                    <Input
                                        value={this.state.title}
                                        onChange={this.handleInputChange}
                                        name="title"
                                        placeholder="Title (required)"
                                    />
                                    <Input
                                        value={this.state.location}
                                        onChange={this.handleInputChange}
                                        name="location"
                                        placeholder="location (required)"
                                    />
                                    <Input
                                        value={this.state.notes}
                                        onChange={this.handleInputChange}
                                        type='textarea'
                                        name="notes"
                                        placeholder="notes (Optional)"
                                    />
                                    <Button
                                        disabled={!(this.state.location && this.state.title)}
                                        onClick={this.handleFormSubmit}
                                    > Submit Activity</Button>
                                </div>
                       
                                {/* <div className="col s11 center" > */}
                                {/* <Input placeholder="Placeholder" s={8} label="Activity Title" id="title" />
                            <Input placeholder="Placeholder" s={8} label="Location" id="location" />
                            <Input placeholder="Placeholder" s={8} label="Price" id="price" />
                            <Input placeholder="Placeholder" s={8} label="URL" id="url"/>
                            <Input placeholder="Placeholder" s={8}  type='textarea' label="Notes" id="note"/> */}
                                {/* </div> */}

                                {/* <div className="col s1" >
                            <Button className="center" id="make-new">Submit</Button>
                            <br/>
                            <Button id="clear-all">Clear All</Button>
                        </div> */}
                            </Row>
                            I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                        </Card>
                    </div>
                    <div className="col s6" >
                        <Card className='extralarge'>
                            <Row>
                                {/* <h4 className="center">My activities </h4>
                                <div id="results"></div> */}
                                {/* header={<CardTitle image='./images/worldMap.png'>Card Title</CardTitle>} */}
                                {/* actions={[<a href='/Activities'>This is a Link</a>]}> */}
                            
                                {this.state.activities.length ? (
              <Row>
                {this.state.activities.map(activity => (
                  <div key={activity._id}>
                    <div to={"/activities/" + activity._id}>
                      <strong>
                        {activity.title} in {activity.location}
                      </strong>
                    </div>
                    <Button onClick={() => this.deleteActivity(activity._id)} />
                  </div>
                ))}
              </Row>
            ) : (
              <h3>No Results to Display</h3>
            )}
                            
                            </Row>

                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Activities;
