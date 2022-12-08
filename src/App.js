import React from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<Hero />
				<About />
				<Gallery />
				<Contact />
				<Footer />
			</main>
		</>

	)
}

export default App
