import { useEffect, useState } from "react";
import { useParams } from "react-router";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [bidsCount, setBidsCount] = useState(0);

  useEffect(() => {
    fetch(`https://firework-server.onrender.com/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, [id]);

  const handleBid = () => {
    setBidsCount((prev) => prev + 1);
  };

  if (!task)
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          src="https://i.postimg.cc/sXCSNnPV/images.png"
          alt="Loading..."
          className="w-16 h-16 animate-spin"
        />
      </div>
    );

  return (
    <div className="p-8 border-2 border-[#FF4500] mx-auto w-[96%] md:w-[60%] lg:w-[39%] mt-10 rounded-[12px] mb-10">
      <h2 className="text-[20px] font-medium text-[#FF4500] mb-6">
        You bid for {bidsCount} opportunit{bidsCount !== 1 ? "ies" : "y"}.
      </h2>

      <h1 className="text-[30px] font-medium mb-6">{task.taskTitle}</h1>
      <p className="text-[22px] font-medium text-[#00000099] mb-4">
        {task.description}
      </p>
      <p className="text-[22px] font-medium text-[#00000099] mb-3">
        Category: {task.category}
      </p>

      <p className="text-[22px] font-medium text-[#00000099] mb-3 ">
        Budget: {task.budget}$
      </p>
      <p className="text-[22px] font-medium text-[#00000099] mb-3">
        Deadline: {task.deadline}
      </p>
      <p className="text-[22px] font-medium text-[#00000099] mb-3">
        Client Name: {task.userName}
      </p>
      <p className="text-[22px] font-medium text-[#00000099] mb-3">
        Client Email: {task.userEmail}
      </p>
      <button
        onClick={handleBid}
        className="bg-[#FF4500] text-[#FFFFFF] px-3 py-2 rounded-[4px] text-[18px]"
      >
        Bid Now
      </button>
    </div>
  );
};

export default TaskDetails;
