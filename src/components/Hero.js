import React from "react"
import {IoMdArrowForward } from "react-icons/io"

//import motion
import {motion} from "framer-motion"

const heroText = {
	hidden: {
		y:-100,
		opacity:0,
	},
	show: {
	  y:0,
	  opacity:1,
	  transition: {
        type: 'tween',
        duration: 1.4,
      },
	},
}


function Hero() {
	return (
		<section className="bg-hero bg-cover bg-center h-[70vh] bg-no-repeat relative mt-[100px]">
			<div className="container mx-auto h-full flex items-center justify-center">
				<motion.div	variants={heroText}
							initial="hidden"
							whileInView={"show"} 
							className="text-white text-center">
					<h1>Céline Galipaud</h1>
					<p className="text-[30px] lg:text-[50px] mb-4">Photographe de mariages</p>
					<button className="btn">Contactez-moi <div>{<IoMdArrowForward />}</div></button>
				</motion.div>
			</div>
		</section>
	)
}

export default Hero

