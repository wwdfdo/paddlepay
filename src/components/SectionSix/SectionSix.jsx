import React from "react";
import { membersArray } from "../../arrays/membersArray";

const SectionSix = () => {
  return (
    <div className="w-3/4 mx-auto py-10" id="team">
      <div>
        <h2 className="text-6xl text-white font-bold text-center my-16 animate-bounce-short">
          Team Member.
        </h2>
      </div>
      <div className="flex gap-10">
        {membersArray.map((member) => (
          <div key={member.id} className="relative">
            <img className="rounded-lg" src={member.img} alt="" />
            <div
              className={`w-full ${member.color} absolute text-black top-0 h-full p-5 cursor-pointer opacity-0 hover:opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-500 hover: rounded-lg`}
            >
              <h2 className="text-white">{member.job}</h2>
              <p className="text-white">{member.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionSix;
