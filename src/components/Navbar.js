import React, { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

function Header() {
	//Header state
	const [isScrolled, setIsScrolled] = useState(false)
	const [click, setClick] = useState(false)
	const closeMenu = () => setClick(false)
	//Scroll event to make the header shrink
	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false)
		})
	})

	return (
		<div className={`${isScrolled ? "h-[80px]" : "h-[100px]"} fixed left-0 top-0 w-full z-10 mx-auto px-6 lg:px-10 shadow-lg bg-white transition-all duration-500`}>
			<div className="flex items-center justify-between h-full">
				<a href="/" className="font-title text-[50px] font-medium relative">CG</a>
				{/* Nav button - show by default - hidden on desktop */}
				<div className="lg:hidden cursor-pointer" onClick={() => setClick(!click)}>
					{click ? (<FaTimes size={30} />) : (<FaBars size={30} />)}
				</div>
				{/* Nav mobile - show by default - hidden on desktop */}
				<div className={`${click ? "left-0" : "-left-full"} fixed bg-white/90 lg:hidden top-0 w-full h-full -z-10 transition-all duration-500`}>
					<nav className="w-full h-full flex justify-center overflow-hidden pt-[150px]">
						<ul className="flex flex-col items-center gap-y-10 text-2xl font-bold">
							<li><a className="nav-items" href="/" onClick={closeMenu}>Accueil</a></li>
							<li><a className="nav-items" href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
							<li><a className="nav-items" href="#contact" onClick={closeMenu}>Contact</a></li>
						</ul>
					</nav>
				</div>
				{/* Nav Desktop - hidden by default - show on desktop */}
				<div className="hidden lg:flex">
					<nav>
						<ul className="flex gap-x-10">
							<li><a className="nav-items" href="/">Accueil</a></li>
							<li><a className="nav-items" href="#portfolio">Portfolio</a></li>
							<li><a className="nav-items" href="#contact">Contact</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default Header
