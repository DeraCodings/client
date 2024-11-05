"use client";

import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../components/resuable components/Cards";
import Image from "next/image";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useState } from "react";

const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
};

function Testimonial() {
  const [sliderRef, setSliderRef] = useState(null);
  return (
    <div className="px-16 my-auto h-full py-16">
      <h2 className="text-2xl text-green-600 text-center font-bold mb-4">What players are saying about us</h2>
      <div className="slider-container">
        <div className="controls text-center mb-4 md:text-end">
          <button onClick={sliderRef?.slickPrev} className="inline-block mr-3 bg-green-600 rounded-full text-center p-1 md:p-2">
            <FaChevronLeft size={20} color="#fff" />
          </button>
          <button onClick={sliderRef?.slickNext} className="inline-block ml-3 bg-green-600 rounded-full text-center p-1 md:p-2">
            <FaChevronRight size={20} color="#fff" />
          </button>
        </div>
        <Slider ref={setSliderRef} {...settings}>
          {testimonials.map((testimonial, index) => {
            return (
              <div key={index} className="w-1/2 lg:shadow-none">
                <div className="w-[150px] h-[150px] rounded-full mx-auto">
                  <Image
                    alt={testimonial.name}
                    src={testimonial.picture}
                    height={300}
                    width={300}
                    className="rounded-full w-full h-full object-cover object-top"
                  />
                </div>

                <div>
                  <h4 className="font-bold text-base text-center">
                    {testimonial.name}
                    <br />
                    {`(${testimonial.position}, ${testimonial.club})`}
                  </h4>
                </div>
                <p className="w-4/5 mx-auto text-center">
                  {testimonial.comment}
                </p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
