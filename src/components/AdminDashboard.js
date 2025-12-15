import { useState } from "react";
import { getTasks } from "../utils/storage";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const AdminDashboard = () => {
  const [tasks, setTasks] = useState(getTasks());

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <TaskForm refresh={setTasks} />
      <TaskList tasks={tasks} refresh={setTasks} />
    </div>
  );
};

export default AdminDashboard;
