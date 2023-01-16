import React from "react"

import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
	return (
		<>
			<header>
				<NavBar />
			</header>
			
			<main>
				<Hero />
				<About />
				<Portfolio />
				<Contact />
				<Footer />
			</main>
		</>

	)
}

export default App
