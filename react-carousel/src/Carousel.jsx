import React, { useState, useEffect } from "react";
import Zygal_one from "./assets/images/zygal_one.jpg";
import Zygal_two from "./assets/images/zygal_two.jpg";
import Zygal_three from "./assets/images/zygal_three.jpg";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Zygal_one, Zygal_two, Zygal_three];

  const handleSliderClick = (index) => {
    setCurrentSlide(index);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const changeSlide = setInterval(handleNextSlide, 5000);

    return () => clearInterval(changeSlide);
  }, [slides.length]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-8 text-xl font-bold text-emerald-500">
        React Carousel Zygal Assignment
      </h1>
      <div className="relative w-full overflow-hidden max-w-lg">
        <div className="w-full h-64 relative">
          <img
            src={slides[currentSlide]}
            className="w-full h-full object-contain transition-opacity duration-300"
            alt={`Slide ${currentSlide + 1}`}
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSliderClick(index)}
            className={`w-3 h-3 rounded-full mx-1 ${
              currentSlide === index ? "bg-green-700" : "bg-slate-900"
            }`}
          ></button>
        ))}
      </div>
      <button className="mt-10 bg-slate-600 text-white px-4 py-2 rounded w-32">
        Static Button
      </button>
    </div>
  );
}

export default Carousel;
