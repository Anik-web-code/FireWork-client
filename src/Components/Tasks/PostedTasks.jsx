import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import MyTask from "./MyTask";

const PostedTasks = () => {
  const [tasks, setTasks] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://firework-server.onrender.com/tasks/email/${user.email}`)
        .then((res) => res.json())
        .then((data) => setTasks(data))
        .catch((error) => console.error("Fetch error:", error));
    }
  }, [user?.email]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `https://firework-server.onrender.com/tasks/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setTasks((prev) => prev.filter((task) => task._id !== id));
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto mt-6">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
        My Posted Tasks
      </h2>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-600">No tasks posted yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr className="text-sm md:text-base text-center">
                <th className="py-2 px-4">Title</th>
                <th className="py-2 px-4">Category</th>
                <th className="py-2 px-4">Deadline</th>
                <th className="py-2 px-4">Budget</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <MyTask
                  key={task._id}
                  task={task}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PostedTasks;
