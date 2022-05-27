import React, { Component } from "react";

import { nums } from "./arrays/featuredCollectionArray";

// import "./slider.css";

const DIRECTIOM_TYPE = {
  next: "NEXT",
  prev: "PREV",
};

class Slider extends Component {
  state = {
    nums: nums,
    current: 2,
    needTransition: true,
    direction: "",
  };

  handleSliderTranslateEnd = () => {
    console.log("handleSliderTranslateEnd");
    const { direction } = this.state;
    switch (direction) {
      case DIRECTIOM_TYPE.next:
        this.vaildNextSlider();
        break;
      case DIRECTIOM_TYPE.prev:
        this.vaildPrevSlider();
        break;
      default:
        break;
    }
  };

  vaildNextSlider = () => {
    const { current, nums } = this.state;
    let _current = current;
    // if (_current > nums.length - 3) {
    _current -= 1;
    const _nums = [...nums, ...nums.slice(0, 1)].slice(-nums.length);
    this.setState({
      needTransition: false,
      current: _current,
      nums: _nums,
    });
    // }
  };

  vaildPrevSlider = () => {
    const { current, nums } = this.state;
    let _current = current;
    // if (_current < 1) {
    _current += 1;
    const _nums = [...nums.slice(-1), ...nums].slice(0, nums.length);
    this.setState({
      needTransition: false,
      current: _current,
      nums: _nums,
    });
    // }
  };

  handleNext = () => {
    const { current, nums } = this.state;
    let _current = current + 1;
    if (_current > nums.length - 3) return;
    this.setState({
      needTransition: true,
      current: _current,
      direction: DIRECTIOM_TYPE.next,
    });
  };

  handlePrev = () => {
    const { current } = this.state;
    let _current = current - 1;
    if (_current < 0) return;
    this.setState({
      needTransition: true,
      current: _current,
      direction: DIRECTIOM_TYPE.prev,
    });
  };

  transLateVal = () => {
    return -(this.state.current * 25);
  };

  sliderStyle = () => {
    if (this.state.needTransition) {
      return {
        transform: `translateX(${this.transLateVal()}%)`,
        transition: "transform 0.6s ease-in-out",
      };
    }

    return {
      transform: `translateX(${this.transLateVal()}%)`,
    };
  };

  render() {
    return (
      <div className="w-full">
        <div className="w-3/5 overflow-hidden mx-auto">
          <ul
            className="flex"
            style={this.sliderStyle()}
            onTransitionEnd={this.handleSliderTranslateEnd}
          >
            {this.state.nums.map((num) => (
              <img className="w-1/4 h-auto" key={num.id} src={num.img} alt="" />
            ))}
          </ul>
          <div>
            <button onClick={this.handlePrev}>prev</button>
            <button onClick={this.handleNext}> next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
