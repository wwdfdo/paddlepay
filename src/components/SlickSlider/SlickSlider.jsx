import "./SlickSlider.css";
import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { images } from "../../arrays/slider";

const SlickSlider = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next text-xl" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev text-xl" onClick={onClick}>
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
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App w-3/5 mx-auto mb-20">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
          >
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
