import React, { useEffect, useState } from "react"
import {FaBars, FaTimes} from "react-icons/fa"
import NavMobile from "./NavMobile"
import NavDesktop from "./NavDesktop"

function Header() {
	//Header state
	const [isScrolled, setIsScrolled] = useState(false)
	const [click, setClick] = useState(false)
	//Scroll event to make the header shrink
	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false)
		})
	})

	return (
		<header className={`${isScrolled ? "h-[80px]" : "h-[100px]"} fixed left-0 top-0 w-full z-10 mx-auto px-6 lg:px-10 bg-white transition-all duration-500`}>
			<div className="flex items-center justify-between h-full">
				<a href="/" className="font-title text-[50px] font-medium relative">CG</a>
				{/* Nav button - show by default - hidden on desktop */}
				<div className="lg:hidden cursor-pointer" onClick={() => setClick(!click)}>
					{click ? (<FaTimes size={30} />) : (<FaBars size={30} />)}
				</div>
				{/* Nav mobile - show by default - hidden on desktop */}
				<div className={`${click ? "left-0" : "-left-full"} fixed lg:hidden bg-white/90 top-0 w-full h-full -z-10 transition-all duration-500`}>
					<NavMobile />
				</div>
				{/* Nav Desktop - hidden by default - show on desktop */}
				<div className="hidden lg:flex">
					<NavDesktop />
				</div>
			</div>
		</header>
	)
}

export default Header
