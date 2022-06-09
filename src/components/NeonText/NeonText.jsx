import React from "react";

import { MdOutlineArrowBackIosNew } from "react-icons/md";

import "./NeonText.css";

const NeonText = () => {
  return (
    <div className="flex justify-center mx-auto w-3/5 gap-10 items-center">
      <p className="neon text-6xl">
        <MdOutlineArrowBackIosNew />
      </p>
      <p className="neon text-6xl">
        <MdOutlineArrowBackIosNew />
      </p>
      <p className="neon text-6xl">
        <MdOutlineArrowBackIosNew />
      </p>
      <p className="neon text-6xl">
        <MdOutlineArrowBackIosNew />
      </p>
    </div>
  );
};

export default NeonText;
