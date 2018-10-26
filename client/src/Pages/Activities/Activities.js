import React, { Component } from 'react';
import API from "../../utils/API";

import { Card } from 'react-materialize'
import { Link } from "react-router-dom";
// import { Row } from 'react-materialize'
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Footer from '../../components/Footer';
import './Activities.css';

class Activities extends Component {
    state = {
        activities: [],
        title: "",
        location: "",
        price: "",
        URL: "",
        imageURL: "",
        notes: "",
        id: "",
        isHidden: true
    };

    componentDidMount() {
        this.loadActivities();
    }

    loadActivities = () => {
        API.getActivities()
            .then(res =>
                this.setState({ activities: res.data, title: "", location: "", price: "", URL: "", imageURL: "", notes: "" })
            )
            .catch(err => console.log(err));
    };

    getActivity = id => {
        console.log(id)
        API.getActivity(id)
      .then(res => {
          this.setState({ title: res.data.title, location: res.data.location, price: res.data.price, URL: res.data.URL, imageURL: res.data.imageURL, notes: res.data.notes, id: res.data._id, isHidden: !this.state.isHidden})
          console.log(this.state)
        })
      .catch(err => console.log(err));
    }


    deleteActivity = id => {
        API.deleteActivity(id)
            .then(res => this.loadActivities())
            .catch(err => console.log(err));
    };

    updateActivity = (id, activityChange) => {
        API.updateActivity(id, this.state)
            .then(res => {
                this.loadActivities()
                this.setState({isHidden: !this.state.isHidden})
            })
            .catch(err => console.log(err))
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
                imageURL: this.state.imageURL,
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
                        <Card className='z-depth-0 card extralarge'>
                            <div>
                                <h4 className="center">Plan your next adventure:<strong><h6>add new activity</h6></strong></h4>

                                <form>
                                    <div className="row">
                                        <div className="col s12">
                                            <input
                                                className="inputForm"
                                                value={this.state.title}
                                                onChange={this.handleInputChange}
                                                type='text'
                                                name="title"
                                                placeholder="Title (required)"
                                            />
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col s6" >
                                            <input
                                                className="inputForm"
                                                value={this.state.location}
                                                onChange={this.handleInputChange}
                                                type='text'
                                                name="location"
                                                placeholder="Location (required)"
                                            />
                                        </div>
                                        <div className="col s6" >
                                            <input
                                                className="inputForm"
                                                value={this.state.price}
                                                onChange={this.handleInputChange}
                                                type='text'
                                                name="price"
                                                placeholder="Price (Recommended)"
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col s6" >
                                            <input
                                                className="inputForm"
                                                value={this.state.URL}
                                                onChange={this.handleInputChange}
                                                type='text'
                                                name="URL"
                                                placeholder="URL (Recommended)"
                                            />
                                        </div>
                                        <div className="col s6" >
                                            <input
                                                className="inputForm"
                                                value={this.state.imageURL}
                                                onChange={this.handleInputChange}
                                                type='text'
                                                name="imageURL"
                                                placeholder="Image URL (Recommended)"
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <textarea
                                            className="inputForm materialize-textarea"
                                            value={this.state.notes}
                                            onChange={this.handleInputChange}
                                            type='textarea'
                                            name="notes"
                                            placeholder="Notes (Recommended)"
                                        ></textarea>
                                    </div>
                                </form>

                            </div>
                            <Button
                                disabled={!(this.state.location && this.state.title)}
                                onClick={this.handleFormSubmit}
                            > Submit Activity</Button>
                            <div>{!this.state.isHidden && <Button onClick={() => this.updateActivity(this.state.id)}> Update Activity</Button> }</div>

                        </Card>
                    </div>
                    <div className="col s6" >

                        <Card className='z-depth-0 card cardIdeas extralarge'>
                            <h4 className="center"> Ideas</h4>
                            <div className="row">
                                {this.state.activities.length ? (
                                    <div className="row">
                                        <div className="col s2" ></div>
                                        <div className="col s8" >
                                            {this.state.activities.map(activity => (
                                                <div key={activity._id}>
                                                    <div className="row">
                                                        <div className="col s8">
                                                            <Link to={"/activities/" + activity._id}>
                                                                <li className="nameLocation">
                                                                    <strong>
                                                                        {activity.title} in {activity.location}
                                                                    </strong>
                                                                </li>
                                                            </Link>
                                                        </div>
                                                        <div className="col s2">
                                                            <Button onClick={() => this.getActivity(activity._id)} >Edit</Button>
                                                        </div>
                                                        <div className="col s2">
                                                            <Button className="erasebtn" onClick={() => this.deleteActivity(activity._id)} >X</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col s2" ></div>
                                    </div>
                                ) : (
                                        <h3>No Results to Display</h3>
                                    )}
                            </div>
                        </Card>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Activities;
