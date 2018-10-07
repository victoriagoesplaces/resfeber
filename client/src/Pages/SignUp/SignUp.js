import React from "react";

const SignUp = ({ onSubmit }) => {
    return (
        <div className="container">
            <div className="content">
                <form className="col s12 signupForm" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="input-field col s12 l6">
                            <input
                                className="validate"
                                name="email"
                                type="text"
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 l6">
                            <input
                                className="validate"
                                name="password"
                                type="password"
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div>
                        <button className="form-submit button">SIGN UP</button>
                    </div>
                </form>
                <a className="existingAccount" href="/login">Already have an account? Login</a>
            </div>
        </div>
    );
}
export default SignUp;