"use client";
import { useEffect, useState } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import { SlideImg, Slider, SliderWrapper } from "./st-banner";

const images = ["../assets/001.png", "../assets/002.png", "../assets/003.png"];

const Banner = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	useEffect(() => {
		const interval = setInterval(nextSlide, 3000);

		return () => clearInterval(interval);
	}, [currentIndex]);
	return (
		<Slider>
			<ArrowBackIosNewOutlinedIcon className="prevButton" onClick={prevSlide} />
			<SliderWrapper style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
				{images.map((image, index) => (
					<SlideImg key={index} src={image} alt={`Slide ${index + 1}`} />
				))}
			</SliderWrapper>
			<ArrowForwardIosOutlined className="nextButton" onClick={nextSlide} />
		</Slider>
	);
};

export default Banner;
