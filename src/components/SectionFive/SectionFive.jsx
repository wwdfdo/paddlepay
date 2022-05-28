import React, { Component } from "react";

import { nums } from "../../arrays/slidesArray";

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
    return -(this.state.current * 33.3333);
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
      <div className="w-5/6 mx-auto flex items-center justify-center p-20">
        <div>
          <button onClick={this.handlePrev}>prev</button>
        </div>
        <div className="w-full overflow-hidden">
          <ul
            className="flex flex-row w-full"
            style={this.sliderStyle()}
            onTransitionEnd={this.handleSliderTranslateEnd}
          >
            {this.state.nums.map((num) => (
              <div className="basis-1/3">
                <img className="w-full" key={num.id} src={num.img} alt="" />
              </div>
            ))}
          </ul>
        </div>
        <div>
          <button onClick={this.handleNext}> next</button>
        </div>
      </div>
    );
  }
}

export default Slider;
