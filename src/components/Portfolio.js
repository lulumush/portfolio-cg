import React, { useState, useEffect } from "react"
//import gallery data
import { galleryData } from '../datas/datas';
//import react photo album
import { PhotoAlbum } from "react-photo-album";
//import motion
import { motion } from "framer-motion";

const galleryAnimate = {
	hidden: {
		opacity:0,
	},
	show: {
	  opacity:1,
	  transition: {
        type: 'tween',
        duration: 1.4,
      },
	},
}

function Gallery() {
	const {images} = galleryData
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		window.addEventListener("resize", () => {
			setWindowWidth(window.innerWidth)
		})
	})

	return (
		<section id="portfolio">
			<motion.div	
				variants={galleryAnimate}
				initial="hidden"
				whileInView={"show"} >
				<PhotoAlbum 
					layout="columns" 
					photos={images} 
					columns={windowWidth < 900 ? 2 : 3 }/>
			</motion.div>
		</section>
	)
}

export default Gallery
