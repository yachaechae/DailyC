"use client";
import { useEffect, useState } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { ArrowForwardIosOutlined } from "@mui/icons-material";

const images = ["../assets/001.png", "../assets/002.png", "../assets/003.png"];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="relative w-screen m-auto overflow-hidden">
      <ArrowBackIosNewOutlinedIcon
        className="absolute top-1/2 left-4 -translate-y-1/2 border-none bg-white bg-opacity-75  p-3 cursor-pointer text-5xl z-10"
        onClick={prevSlide}
      />
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            className="flex-shrink-0 flex-grow-0 w-screen"
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <ArrowForwardIosOutlined
        className="absolute top-1/2 right-4 -translate-y-1/2 border-none bg-white bg-opacity-75  p-3 cursor-pointer text-5xl z-10"
        onClick={nextSlide}
      />
    </div>
  );
};

export default Banner;
