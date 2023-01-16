import React from "react"
//import icon
import {IoMdArrowForward } from "react-icons/io"


function Hero() {
	return (
		<section className="bg-hero bg-cover bg-center h-[90vh] bg-no-repeat relative mt-[100px]">
			<div className="container mx-auto h-full flex items-center justify-center">
				<div className="text-white text-center flex flex-col">
					<h1 className="mb-12">Céline Galipaud</h1>
					<p className="text-[30px] lg:text-[50px] mb-14">Photographe de mariages</p>
					<a href="#contact" className="btn border-white/70 hover:bg-white hover:text-zinc-900">Contactez-moi<div>{<IoMdArrowForward />}</div></a>
				</div>
			</div>
		</section>
	)
}

export default Hero

