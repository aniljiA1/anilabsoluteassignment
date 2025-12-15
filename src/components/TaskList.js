import TaskItem from "./TaskItem";
import UserCard from "./UserCard";
import { getUsers } from "../utils/storage";

const TaskList = ({ tasks, refresh }) => {
  const users = getUsers().filter((u) => u.role === "user");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="font-bold mb-2">Tasks</h3>
        {tasks.map((t) => (
          <TaskItem key={t.id} task={t} />
        ))}
      </div>
      <div>
        <h3 className="font-bold mb-2">Users (Drop tasks here)</h3>
        {users.map((u) => (
          <UserCard key={u.id} user={u} refresh={refresh} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
