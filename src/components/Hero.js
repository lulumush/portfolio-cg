import React from "react"

function Hero() {
	return (
		<section className="before:content-[''] before:bg-hero before:bg-cover before:bg-center before:absolute before:h-full before:w-full before:t-0 before:l-0 before:-z-10 h-[100vh] w-full ">
			<div className="text-white bg-zinc-900/20 h-full flex flex-col items-center justify-center">
				<h1 className="text-[60px] lg:text-[80px]">Céline Galipaud</h1>
				<p className="text-[40px] lg:text-[60px]">Photographe de mariages</p>
			</div>
		</section>
	)
}

export default Hero
