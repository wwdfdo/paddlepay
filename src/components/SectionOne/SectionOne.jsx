import React, { useState } from "react";

const SectionOne = () => {
  const [heading, setHeading] = useState(null);
  const [heading2, setHeading2] = useState(null);

  return (
    <div>
      <div className={`${heading === "hidden" ? null : "hidden"} text-red-600`}>
        hello
      </div>
      <div
        className={`${heading2 === "hidden" ? null : "hidden"} text-red-600`}
      >
        hello
      </div>
      <button
        className="mr-20"
        onClick={() => setHeading(heading === "hidden" ? null : "hidden")}
      >
        click
      </button>
      <button
        onClick={() => setHeading2(heading2 === "hidden" ? null : "hidden")}
      >
        click
      </button>
    </div>
  );
};

export default SectionOne;
