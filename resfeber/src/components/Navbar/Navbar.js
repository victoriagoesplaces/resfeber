import React from 'react';
import './Navbar.css';

function Navbar(props) {
	return(
		<div>
			<nav>
				<div className="nav-wrapper">
				{/* Change href information to go to main page of the website. */}
				<a href="victoriagoesplaces.com" className="brand-logo">Logo</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><a href="sass.html">Sass</a></li>
					<li><a href="badges.html">Components</a></li>
					<li><a href="collapsible.html">JavaScript</a></li>
				</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar;