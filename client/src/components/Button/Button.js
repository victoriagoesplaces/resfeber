import React from 'react';
import './Button.css';

function Button(props) {
    return (
        <div>
            <button class="btn waves-effect waves-light" type="submit" name="action">  {props.children}
            </button>
        </div>
    );
}

export default Button;