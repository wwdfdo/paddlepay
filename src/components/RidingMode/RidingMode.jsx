import React from "react";

const RidingMode = () => {
  return (
    <div>
      <h2 className="text-white font-sans font-bold text-center lg:text-[3em] lg:my-16">
        Riding Mode
      </h2>
      <div className="w-4/5 flex justify-center gap-8 mx-auto">
        <div className=" text-white rounded-lg w-full p-10 transition ease-in-out delay-150 bg-[#144648] hover:-translate-y-1 hover:scale-105">
          <h3 className="mb-5 font-bold font-mono text-2xl">TRAINING MODE</h3>
          <p className=" font-semibold">
            In training mode, users use their NFT Bicycles to earn tokens by
            riding bicycles around. Users have to choose their bicycle before it
            starts.
          </p>
        </div>
        <div className="text-white rounded-lg   p-10 w-full transition ease-in-out delay-150 bg-[#144648] hover:-translate-y-1 hover:scale-105">
          <h3 className="mb-5 font-bold font-mono text-2xl">
            CYCLING MARATHON MODE
          </h3>
          <p className=" font-semibold">
            In Cycling Marathon Mode, users need to register under the Cycling
            Marathon Tab at least 48 hours before event. The Cycling Marathons
            are organized weekly and last for the whole week. Users can choose
            to participate in the 50km, 70km, or 100 km level, but can only take
            part in one level at a time.
          </p>
        </div>
        <div className="text-white rounded-lg w-full p-10 transition ease-in-out delay-150 bg-[#144648] hover:-translate-y-1 hover:scale-105">
          <h3 className="mb-5 font-bold font-mono text-2xl">DISCOVERY MODE</h3>
          <p className=" font-semibold">
            Users have to equip an item to participate in the discovery mode.
            Users are asked to ride their bicycle to several locations for
            collecting the reward. These locations are generated randomly along
            the road in the radius of 5km.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RidingMode;
