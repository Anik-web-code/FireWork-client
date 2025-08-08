import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const MyTask = ({ task, handleDelete }) => {
  const { _id, taskTitle, category, deadline, budget } = task;

  return (
    <tr className="border-b text-sm md:text-base text-center">
      <Helmet>
        <title>My Tasks</title>
      </Helmet>
      <td className="py-2 px-4">{taskTitle}</td>
      <td className="py-2 px-4">{category}</td>
      <td className="py-2 px-4">{deadline}</td>
      <td className="py-2 px-4">${budget}</td>
      <td className="py-2 px-2 flex flex-col sm:flex-row justify-center gap-2 sm:gap-1 items-center">
        <Link to={`/update-task/${_id}`}>
          <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
            Update
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
        >
          Delete
        </button>
        <Link to={`/bids/${_id}`}>
          <button className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600">
            Bids
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default MyTask;
