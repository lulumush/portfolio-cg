import React, { useState, useEffect } from "react"
//import gallery data
import { galleryData } from '../datas/datas'
//import react photo album
import { PhotoAlbum } from "react-photo-album"
//import motion
import { motion } from "framer-motion"
//import animation variants
import { animationVariants } from "../animation"


function Gallery() {
	const {images} = galleryData
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		window.addEventListener("resize", () => {
			setWindowWidth(window.innerWidth)
		})
	})

	return (
		<section id="portfolio" className="section">
			<motion.div	
				variants={animationVariants()}
				initial={"hidden"}
				whileInView={"show"} >
				<PhotoAlbum 
					layout="columns" 
					photos={images} 
					columns={(containerWidth) => {
						if (windowWidth < 500) return 1;
						if (windowWidth < 900) return 2;
						return 3;
					}}/>
			</motion.div>
		</section>
	)
}

export default Gallery
