import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { getTasks, saveTasks } from "../utils/storage";

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState(
    getTasks().filter((t) => t.assigneeId === user.id)
  );

  const complete = (id) => {
    const updated = getTasks().map((t) =>
      t.id === id ? { ...t, status: "Completed" } : t
    );
    saveTasks(updated);
    setTasks(updated.filter((t) => t.assigneeId === user.id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Tasks</h2>
      {tasks.map((t) => (
        <div
          key={t.id}
          className="bg-white p-3 rounded shadow mb-2 flex justify-between"
        >
          <span>{t.title}</span>
          {t.status !== "Completed" && (
            <button onClick={() => complete(t.id)} className="text-green-600">
              Complete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserDashboard;
