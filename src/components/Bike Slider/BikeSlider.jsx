import React from "react";

import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { bikes } from "../../arrays/bikesArrays";

const BikeSlider = () => {
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
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
  };

  return (
    <div className="w-3/5 mx-auto">
      <Slider {...settings}>
        {bikes.map((bike) => (
          <div>
            <img src={bike.img} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BikeSlider;
