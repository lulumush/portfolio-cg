import React from "react"
//import icon
import {IoMdArrowForward } from "react-icons/io"
//import motion
import {motion} from "framer-motion"
//import animation variants
import { animationVariants } from "../animation"


function Hero() {
	return (
		<section className="bg-hero bg-cover bg-center h-[90vh] bg-no-repeat relative mt-[100px]">
			<div className="container mx-auto h-full flex items-center justify-center">
				<motion.div	
					variants={animationVariants("down")}
					initial="hidden"
					whileInView={"show"} 
					className="text-white text-center">
					
					<h1 className="mb-12">Céline Galipaud</h1>
					<p className="text-[30px] lg:text-[50px] mb-14">Photographe de mariages</p>
					<button className="btn hover:bg-white hover:text-zinc-900 border-white/70">Contactez-moi <div>{<IoMdArrowForward />}</div></button>
				</motion.div>
			</div>
		</section>
	)
}

export default Hero

