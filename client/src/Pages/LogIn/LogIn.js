import React from 'react';


const LogIn = ({ onSubmit }) => {
    return (
<div className="container">
            <div className="content">
                <form className="col s12 loginForm" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="input-field col s12 l6">
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
                        <div className="input-field col s12 l6">
                            <input
                                className="validate"
                                htmlFor="password"
                                name="password"
                                type="password"
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div>
                        <button className="form-submit button">SIGN IN</button>
                    </div>
                </form>
                <a className="needAccount" href="/signup">Don't have an account? Sign Up</a>
            </div>
        </div>
    );
}

export default LogIn;