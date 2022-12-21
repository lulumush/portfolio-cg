import React from 'react';
// import about data
import { aboutData } from '../datas/datas';
// import motion
import { motion } from 'framer-motion';

const aboutTextLeft = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'tween',
			duration: 1.4,
		},
	},
}

const aboutTextRight = {
	hidden: {
		x: 100,
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'tween',
			duration: 1.4,
		},
	},
}

function About() {
	// about datas
	const { title, subtitle1, subtitle2 } = aboutData
	return (
		<section id="about" className='section px-[30px]'>
			<div className='max-w-[1140px] mx-auto flex flex-col items-center lg:flex-row'>
				<div className='flex-1'>
					<motion.h2
						variants={aboutTextLeft}
						initial="hidden"
						whileInView={"show"} >
						{title}
					</motion.h2>
					<motion.div
						variants={aboutTextRight}
						initial="hidden"
						whileInView={"show"}
						className='flex flex-col items-end'>
						<div className='max-w-[600px]'>
							<p className='mb-6'>{subtitle1}</p>
							<p >{subtitle2}</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default About
