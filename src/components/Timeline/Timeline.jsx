import React from "react";
import { timelineArray } from "../../arrays/timelineArray";

const oddOrEven = (index) => {
  if (index % 2 === 0) {
    return "even";
  }

  return "odd";
};

export default function Timeline() {
  return (
    <div className="my-20">
      {timelineArray.map(
        ({ labelTitle, label, taskTitle, subTasks, color }, index) => (
          <>
            <div
              className={`flex items-start gap-8 text-white font-semibold my-10`}
            >
              <h3
                className={`text-3xl px-4 py-2 w-1/2 ${color} ${
                  oddOrEven(index) === "even" ? "text-right" : ""
                }`}
              >
                {labelTitle}
              </h3>
              <div
                className={`${
                  oddOrEven(index) === "odd" ? "order-first text-right" : ""
                } w-1/2`}
              >
                <p className={`px-4 py-2 ${color}`}>{label}</p>
                <h1 className="text-2xl">{taskTitle}</h1>

                <ul className="mt-2 ">
                  {subTasks.map((subtask, index) => (
                    <li className="text-md leading-relaxed" key={index}>
                      {subtask}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}
