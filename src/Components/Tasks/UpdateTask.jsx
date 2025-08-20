import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import { Helmet } from "react-helmet-async";

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [taskData, setTaskData] = useState({
    taskTitle: "",
    category: "Web Development",
    description: "",
    deadline: "",
    budget: "",
  });

  useEffect(() => {
    fetch(`https://firework-server.onrender.com/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTaskData({
          taskTitle: data.taskTitle,
          category: data.category,
          description: data.description,
          deadline: data.deadline,
          budget: data.budget,
        });
      })
      .catch((err) => console.error("Error fetching task:", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      ...taskData,
      email: user.email,
      userName: user.displayName,
    };

    fetch(`https://firework-server.onrender.com/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount || data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Task updated successfully!",
            confirmButtonText: "OK",
          });
          navigate("/mytasks");
        }
      })
      .catch((err) => console.error("Error updating task:", err));
  };

  return (
    <div className="w-[80%] mx-auto mt-10 mb-20">
      <Helmet>
        <title>Update Task</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-black">
        Update Task
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-md rounded px-10 py-8 space-y-5"
      >
        <div>
          <label className="block mb-2 font-medium text-gray-900 dark:text-gray-100">
            Task Title
          </label>
          <input
            type="text"
            name="taskTitle"
            value={taskData.taskTitle}
            onChange={handleChange}
            className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-100"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-900 dark:text-gray-100">
            Category
          </label>
          <select
            name="category"
            value={taskData.category}
            onChange={handleChange}
            className="select select-bordered w-full dark:bg-gray-700 dark:text-gray-100"
          >
            <option>Web Development</option>
            <option>Design</option>
            <option>Writing</option>
            <option>Marketing</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-900 dark:text-gray-100">
            Description
          </label>
          <textarea
            name="description"
            value={taskData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full dark:bg-gray-700 dark:text-gray-100"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="block mb-2 font-medium text-gray-900 dark:text-gray-100">
              Deadline
            </label>
            <input
              type="date"
              name="deadline"
              value={taskData.deadline}
              onChange={handleChange}
              className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-100"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-900 dark:text-gray-100">
              Budget ($)
            </label>
            <input
              type="number"
              name="budget"
              value={taskData.budget}
              onChange={handleChange}
              className="input input-bordered w-full dark:bg-gray-700 dark:text-gray-100"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="block mb-2 font-medium text-gray-900 dark:text-gray-100">
              User Email
            </label>
            <input
              type="email"
              value={user.email}
              readOnly
              className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 dark:text-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-900 dark:text-gray-100">
              User Name
            </label>
            <input
              type="text"
              value={user.displayName}
              readOnly
              className="input input-bordered w-full bg-gray-100 dark:bg-gray-700 dark:text-gray-100 cursor-not-allowed"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full bg-[#FF4500] border border-[#FFFFFF] shadow-none"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
