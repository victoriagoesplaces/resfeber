import React, { Component } from 'react';
import API from "../../utils/API";

import { Card } from 'react-materialize'
import { Link } from "react-router-dom";
import { Row } from 'react-materialize'
import { Input } from 'react-materialize'
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Footer from '../../components/Footer';


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
                this.setState({ activities: res.data, title: "", location: "", price: "", URL:"", notes: "" })
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
                price: this.state.price,
                URL: this.state.URL,
                notes: this.state.notes
            })
                .then(res => this.loadActivities())
                .catch(err => console.log(err));
        }
    };


    render() {
        return (
            <div>
                <Navbar />
                <div className="row">
                    <div className="col s6" >
                        <Card className='extralarge'>
                            <Row>
                                <h4 className="center">Add new activity</h4>

                                <form>
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
                                        value={this.state.price}
                                        onChange={this.handleInputChange}
                                        name="price"
                                        placeholder="Price (Optional)"
                                    />
                                    <Input
                                        value={this.state.URL}
                                        onChange={this.handleInputChange}
                                        name="URL"
                                        placeholder="URL (Optional)"
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
                                </form>

                            </Row>
                            I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                        </Card>
                    </div>
                    <div className="col s6" >
                        <Card className='extralarge'>
                            <Row>

                                {this.state.activities.length ? (
                                    <Row>
                                        {this.state.activities.map(activity => (
                                            <div key={activity._id}>
                                                <Link to={"/activities/" + activity._id}>
                                                    <strong>
                                                        {activity.title} in {activity.location}
                                                    </strong>
                                                </Link>
                                                <Button onClick={() => this.deleteActivity(activity._id)} >X</Button>
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
                <Footer/>
            </div>
        )
    }
}

export default Activities;
