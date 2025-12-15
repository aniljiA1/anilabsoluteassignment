import { useDrop } from "react-dnd";
import { getTasks, saveTasks } from "../utils/storage";

const UserCard = ({ user, refresh }) => {
  const [, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => {
      const updated = getTasks().map((t) =>
        t.id === item.id ? { ...t, assigneeId: user.id } : t
      );
      saveTasks(updated);
      refresh(updated);
    },
  }));

  return (
    <div ref={drop} className="border rounded p-3 mb-2 bg-blue-50">
      {user.username}
    </div>
  );
};

export default UserCard;
