import React from 'react';
import './Navbar.css';

function Navbar(props) {
	return(
		<div>
			<nav>
				<div className="nav-wrapper">
				{/* Change href information to go to main page of the website. */}
				<a href="/" className="brand-logo">Resfeber</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><a href="/dashboard">Dashboard</a></li>
					{/* <li><a href="/">Itineraries</a></li> */}
					{/* <li><a href="">Link</a></li> */}
				</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar;