import React from "react"
//import icons
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
// import motion
import { motion } from 'framer-motion';
//import animation variants
import { animationVariants } from "../animation";


function Contact() {
	const sendMail = (e) => {
		e.preventDefault()
	}
	return (
		<section id="contact" className="section px-[30px] pb-[80px] overflow-hidden">
			<div className="max-w-[1140px] mx-auto w-full">
				{/* contact title + animation */}
				<motion.div 
					variants={animationVariants("left")}
					initial="hidden"
					whileInView={"show"}>
					<h2>Contact :</h2>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
				</motion.div>
				<div className="flex flex-col lg:flex-row lg:justify-between">
					{/* contact informations + animation */}
					<motion.div 
						variants={animationVariants("left")}
						initial="hidden"
						whileInView={"show"}
						className="flex flex-col gap-y-4 mt-14 py-4 w-full">
						<div className="flex items-center gap-x-4">
							<span><FaMapMarkerAlt /></span>
							<span>633 Hayes Crest, Los Angeles</span>
						</div>
						<div className="flex items-center gap-x-4">
							<span><FaPhoneAlt /></span>
							<span>(763) 709-0781</span>
						</div>
						<div className="flex items-center gap-x-4">
							<span><FaEnvelope /></span>
							<span>contact@contact.com</span>
						</div>
					</motion.div>
					{/* contact form + animation */}
					<motion.div 
						variants={animationVariants("right")}
						initial="hidden"
						whileInView={"show"}
						className="mt-14 w-full">
						<form className="flex flex-col gap-y-10">
							<input className="border-b border-dark placeholder:text-[#555] italic tracking-wider pb-2" placeholder="Votre nom" type="text" />
							<input className="border-b border-dark placeholder:text-[#555] italic tracking-wider pb-2" placeholder="Votre adresse e-mail" type="email" />
							<input className="border-b border-dark placeholder:text-[#555] italic tracking-wider pb-2" placeholder="Votre message" type="text" />
							<button className="btn bg-zinc-900 text-white hover:bg-zinc-900/90" onClick={sendMail}>Envoyer</button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
export default Contact
