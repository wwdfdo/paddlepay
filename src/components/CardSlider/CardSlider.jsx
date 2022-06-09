import "./CardSlider.css";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { cardsArray } from "../../arrays/cardsArray";

const CardSlider = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="arrow cursor-pointer absolute right-[36.5%] -bottom-7 z-10 text-[#73f59b] p-1 rounded-3xl bg-slate-100  hover:text-[#68edff] next text-md"
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="arrow cursor-pointer absolute -bottom-7 left-[36.5%] z-10 text-[#73f59b]  p-1 rounded-3xl bg-slate-100  hover:text-[#68edff] prev text-md"
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    dots: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    centerPadding: 40,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div id="Bikes" className="App lg:w-4/5 w-5/6  mx-auto lg:pt-40 pt-10">
      <h2 className="text-white font-rubik font-bold text-center text-[2.5em] lg:mb-16 pb-10">
        {" "}
        NFTs Showcase
      </h2>
      <div>
        <Slider {...settings}>
          {cardsArray.map((card) => (
            <div className=" pr-5 pl-5">
              <div className="bg-white rounded-t-md p-2 ">
                {" "}
                <img src={card.img} alt="" />
              </div>
              <div className="bg-[#73f59bc9] rounded-b-md">
                <div>
                  <h2>{card.name}</h2>
                </div>
                <div>
                  <div>{card.creator}</div>
                  <div>{card.bid}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;
