import "./SlickSlider.css";
import React, { useState } from "react";
import Slider from "react-slick";
import bike1 from "../../images/bike1.jpg";
import bike2 from "../../images/bike2.jpg";
import bike3 from "../../images/bike3.jpg";
import bike4 from "../../images/bike4.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [bike1, bike2, bike3, bike4];
const SlickSlider = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
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
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
