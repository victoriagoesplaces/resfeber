import React, { Component } from 'react';


import {Card} from 'react-materialize'
// import {CardTitle} from 'react-materialize'
import {Row} from 'react-materialize'
import {Input} from 'react-materialize'
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";


class Dashboard extends Component {
//formjs code
    render() {
        return (
            <div>
                <Navbar />
                <div className="row">
                    <div className="col s6" >
                        <Card className='extralarge'>
                        {/* header={<CardTitle image='./images/worldMap.png'>Card Title</CardTitle>} */}
                            {/* actions={[<a href='/dashboard'>This is a Link</a>]}> */}
                        <Row>
                        <h4 className="center">Add new activity</h4>
                        {/* <div className="col s11 center" > */}
                            <Input placeholder="Placeholder" s={8} label="Activity Title" id="title" />
                            <Input placeholder="Placeholder" s={8} label="Location" id="location" />
                            <Input placeholder="Placeholder" s={8} label="Price" id="price" />
                            <Input placeholder="Placeholder" s={8} label="URL" id="url"/>
                            <Input placeholder="Placeholder" s={8}  type='textarea' label="Notes" id="note"/>
                        {/* </div> */}
                        <div className="col s1" >
                            <Button className="center" id="make-new">Submit</Button>
                            <br/>
                            <Button id="clear-all">Clear All</Button>
                        </div>
                        </Row>                            
                            I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                        </Card>
                    </div>
                    <div className="col s6" >
                        <Card className='extralarge'>
                        <Row>
                        <h4 className="center">My activities </h4>
                        <div id="results"></div>
                            {/* header={<CardTitle image='./images/worldMap.png'>Card Title</CardTitle>} */}
                            {/* actions={[<a href='/dashboard'>This is a Link</a>]}> */}
                        </Row>   
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
