import React from 'react';
import './Button.css';

function Button(props) {
    return (
        <div>
            <button {...props} className="btn" type="submit" name="action">  {props.children}
            </button>
        </div>
    );
}

export default Button;