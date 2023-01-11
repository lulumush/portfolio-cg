import React from "react"

function Contact() {
	return (
		<section id="contact" className="section px-[30px] pb-[80px]">
			<div className="max-w-[1140px] mx-auto w-full">
				<form className="flex flex-col gap-y-10">
					<input className="border-b border-dark placeholder:text-[#555] italic tracking-wider pb-2" placeholder="Votre nom" type="text" />
					<input className="border-b border-dark placeholder:text-[#555] italic tracking-wider pb-2" placeholder="Votre adresse e-mail" type="email" />
					<input className="border-b border-dark placeholder:text-[#555] italic tracking-wider pb-2" placeholder="Votre message" type="text" />
				</form>
			</div>
		</section>
	)
}

export default Contact
