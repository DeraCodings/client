"use client";

import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../../Home page/Testimonial";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  weight: "500",
  subsets: ["latin"]
});

function SliderComponent({ children }) {
  const [sliderRef, setSliderRef] = useState(null);
  return (
    <div className="px-16 my-auto h-full py-16">
      <h2 className="text-2xl text-green-600 text-center font-bold mb-4" style={{fontFamily: `${nunitoSans.style.fontFamily}`, fontWeight: `${nunitoSans.style.fontWeight}`}}>
        What players are saying about us
      </h2>
      <div className="slider-container">
        <div className="controls text-center mb-4 md:text-end">
          <button
            onClick={sliderRef?.slickPrev}
            className="inline-block mr-3 bg-green-600 rounded-full text-center p-1 md:p-2"
          >
            <FaChevronLeft size={20} color="#fff" />
          </button>
          <button
            onClick={sliderRef?.slickNext}
            className="inline-block ml-3 bg-green-600 rounded-full text-center p-1 md:p-2"
          >
            <FaChevronRight size={20} color="#fff" />
          </button>
        </div>
        <Slider ref={setSliderRef} {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
}

export default SliderComponent;
