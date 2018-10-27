import React from 'react';
import './NavbarMain.css';

function NavbarMain(props) {
	return(
		<div>
			<nav className="transparent z-depth-0">
				<div className="nav-wrapper transparent ">

				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><a className="navbarButton" href="/login">Log In</a></li>
				</ul>
				</div>
			</nav>
		</div>
	)
}

export default NavbarMain;