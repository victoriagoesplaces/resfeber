import React, { Component } from 'react';

import {Card} from 'react-materialize'
import {CardTitle} from 'react-materialize'
import Navbar from "../../components/Navbar";


class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="row">
                    <div className="col s6" >
                        <Card className='small'
                            header={<CardTitle image='./images/worldMap.png'>Card Title</CardTitle>}
                            actions={[<a href='/dashboard'>This is a Link</a>]}>
                            I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                        </Card>
                    </div>
                    <div className="col s6" >
                        <Card className='small'
                            header={<CardTitle image='./images/worldMap.png'>Card Title</CardTitle>}
                            actions={[<a href='/dashboard'>This is a Link</a>]}>
                            I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
