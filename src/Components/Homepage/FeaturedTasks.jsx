import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Task from "./task";
import { Link } from "react-router";

const FeaturedTasks = () => {
  const { tasks } = useContext(AuthContext);

  const featuredTasks = [...tasks]
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
    .slice(0, 6);

  return (
    <div className="w-[96%] mx-auto lg:w-[80%] md:w-[90%] mt-24">
      <h1 className="text-center text-[48px] font-medium mb-5">
        Featured Tasks
      </h1>
      <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {featuredTasks.map((task) => {
          return <Task key={task._id} task={task} />;
        })}
      </div>
      <h1 className="text-center mb-10">
        <Link to="/browsetask">
          <button className="text-[#FFFFFF] bg-[#FF4500] py-2 px-4 rounded-[4px] text-[18px]">
            Browse All Tasks
          </button>
        </Link>
      </h1>
    </div>
  );
};

export default FeaturedTasks;
