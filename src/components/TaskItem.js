import { useDrag } from "react-dnd";

const TaskItem = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: task.id },
    collect: (m) => ({ isDragging: !!m.isDragging() }),
  }));

  return (
    <div
      ref={drag}
      className={`p-3 mb-2 rounded shadow cursor-move ${
        isDragging ? "opacity-50" : "bg-gray-100"
      }`}
    >
      <div className="font-semibold">{task.title}</div>
      <div className="text-sm text-gray-600">{task.status}</div>
    </div>
  );
};

export default TaskItem;
