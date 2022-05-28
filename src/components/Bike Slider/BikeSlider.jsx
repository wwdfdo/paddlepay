import React from "react";
import { bikes } from "../../arrays/bikesArrays";

const BikeSlider = () => {
  return bikes.map((bike) => (
    <div>
      <img src={bike.img} alt="" />
    </div>
  ));
};

export default BikeSlider;
