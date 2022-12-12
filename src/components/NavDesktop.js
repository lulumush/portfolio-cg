import React from "react"


function NavDesktop() {

	return (
		<nav>
			<ul className="flex gap-x-10">
				<li><a className="nav-items" href="/">Accueil</a></li>
				<li><a className="nav-items" href="#portfolio">Portfolio</a></li>
				<li><a className="nav-items" href="#contact">Contact</a></li>
			</ul>
		</nav>
	)
}

export default NavDesktop
