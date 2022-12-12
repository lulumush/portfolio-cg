import React from "react"


function NavMobile() {

	return (
		<nav className="bg-white/60 w-full h-full flex justify-center overflow-hidden pt-[150px]">
			<ul className="flex flex-col items-center gap-y-10 text-2xl font-bold">
				<li><a className="nav-items" href="/">Accueil</a></li>
				<li><a className="nav-items" href="#portfolio">Portfolio</a></li>
				<li><a className="nav-items" href="#contact">Contact</a></li>
			</ul>
		</nav>
	)
}

export default NavMobile
