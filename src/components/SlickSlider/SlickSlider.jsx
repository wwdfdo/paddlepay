import "./SlickSlider.css";
import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { images } from "../../arrays/slider";

const SlickSlider = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="arrow absolute cursor-pointer z-10 text-[#73f59b] lg:right-[25%] right-0 top-[50%] hover:text-[#68edff] next text-xl"
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="arrow absolute cursor-pointer z-10 text-[#73f59b] lg:left-[25%] left-0 top-[50%] hover:text-[#68edff] prev text-xl"
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div id="Bikes" className="App lg:w-4/5 w-5/6  mx-auto lg:pt-40 pt-10">
      <h2 className="text-white font-rubik font-bold text-center lg:text-[3em] lg:mb-16">
        {" "}
        NFTs Showcase
      </h2>
      <div>
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`${
                idx === imageIndex ? "slide activeSlide" : "slide"
              } `}
            >
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlickSlider;
