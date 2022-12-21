import React from "react"
import { FaInstagram, FaFacebookF } from "react-icons/fa"

function Footer() {
	return (
		<footer className="bg-zinc-900 mx-auto text-white py-20 flex flex-col items-center gap-4">
			<p> © Céline Galipaud 2022 </p>
			<div className="flex gap-2">
			<p><a href="https://www.instagram.com/celinegalipaud_wedding/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></p>
			<p><a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></p>
			</div>
			
		</footer>
	)
}

export default Footer
