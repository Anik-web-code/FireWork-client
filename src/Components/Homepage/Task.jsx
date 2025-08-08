import React from "react";
import { NavLink } from "react-router";

const Task = ({ task }) => {
  return (
    <div className="mb-6">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://i.postimg.cc/ht1ZH7Z9/97840a36-9567-43d4-aa7d-085b15e4a4.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[1.6rem]">{task.taskTitle}</h2>
          <p className="text-[18px] h-[68px] mb-4">{task.description}</p>
          <h1 className="text-[22px] font-medium">{task.budget}$</h1>
          <div className="card-actions flex justify-between">
            <h1 className="text-[22px] font-medium">
              Deadline: {task.deadline}
            </h1>
            <NavLink to={`/taskdetails/${task._id}`}>
              <button className="px-4 py-2 text-[18px] text-[#FFFFFF] rounded-[6px] bg-[#FF4500] hover:bg-[#FF450095]">
                {" "}
                Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
