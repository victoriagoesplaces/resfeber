import React from 'react';
import Button from "../../components/Button";
import './Login.css';



const LogIn = ({ onSubmit }) => {
    return (
        <div className="container">
            <div className="content">
                <div className="row">
                    <div className="col s3"></div>
                    <form className="col s6 loginForm" onSubmit={onSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    className="validate"
                                    name="email"
                                    htmlFor="email"
                                    type="text"
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    className="validate"
                                    htmlFor="password"
                                    name="password"
                                    type="password"
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>

                        <div className="buttonContainer">
                            <Button className="button">Sign In</Button>
                        </div>
                    </form>
                    <div className="col s3"></div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;