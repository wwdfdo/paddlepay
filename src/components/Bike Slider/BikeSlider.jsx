import React from "react";

import Slider from "react-slick";

import { bikes } from "../../arrays/bikesArrays";

const BikeSlider = () => {
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
