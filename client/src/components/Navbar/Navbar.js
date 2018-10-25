import React from 'react';
import './Navbar.css';

function Navbar(props) {
	return(
		<div>
			<nav className="transparent z-depth-0">
				<div className="nav-wrapper ">
				{/* Change href information to go to main page of the website. */}
				<a href="/" className="brand-logo">Resfeber</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><a href="/logout">Log Out</a></li>
				</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar;