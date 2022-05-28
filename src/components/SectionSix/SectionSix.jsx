import React from "react";
import { membersArray } from "../../arrays/membersArray";

const SectionSix = () => {
  return (
    <div className="w-3/5 mx-auto pb-10">
      <div>
        <h2 className="text-6xl text-white font-bold text-center my-16">
          Team Member.
        </h2>
      </div>
      <div className="flex gap-8">
        {membersArray.map((member) => (
          <div key={member.id} className="relative">
            <img src={member.img} alt="" />
            <div
              className={`w-full ${member.color} absolute text-black top-0 h-full p-5 cursor-pointer opacity-0 hover:opacity-100`}
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