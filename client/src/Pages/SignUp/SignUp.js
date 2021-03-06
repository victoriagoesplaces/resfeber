import React from "react";
import Button from "../../components/Button";
import './SignUp.css';


const SignUp = ({ onSubmit }) => {
    return (
        <div className="container">
            <div className="content">
                   <div className="row">
                   <div className="col s3"></div>
                <form className="col s6 signupForm" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                className="validate"
                                name="email"
                                type="text"
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                className="validate"
                                name="password"
                                type="password"
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div>
                         <Button>Sign Up</Button>
                    </div>
                </form>
                {/* <a className="existingAccount" href="/login">Already have an account?</a> */}
                <div className="col s3"></div>
            </div>
            </div>
        </div>
    );
}
export default SignUp;