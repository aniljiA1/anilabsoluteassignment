import { useState } from "react";
import { v4 as uuid } from "uuid";
import { getTasks, saveTasks, getUsers } from "../utils/storage";

const TaskForm = ({ refresh }) => {
  const users = getUsers().filter((u) => u.role === "user");
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState(users[0]?.id);

  const add = () => {
    if (!title) return;
    const tasks = getTasks();
    const updated = [
      ...tasks,
      { id: uuid(), title, assigneeId: assignee, status: "Pending" },
    ];
    saveTasks(updated);
    refresh(updated);
    setTitle("");
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-6 flex gap-3">
      <input
        className="border px-3 py-2 rounded w-full"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className="border px-3 py-2 rounded"
        onChange={(e) => setAssignee(Number(e.target.value))}
      >
        {users.map((u) => (
          <option key={u.id} value={u.id}>
            {u.username}
          </option>
        ))}
      </select>
      <button
        onClick={add}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add
      </button>
    </div>
  );
};

export default TaskForm;
