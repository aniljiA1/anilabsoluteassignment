export const initData = () => {
  if (!localStorage.getItem("users")) {
    localStorage.setItem(
      "users",
      JSON.stringify([
        { id: 1, username: "admin", role: "admin", password: "admin123" },
        { id: 2, username: "user1", role: "user", password: "user123" },
        { id: 3, username: "user2", role: "user", password: "user123" },
      ])
    );
  }
  if (!localStorage.getItem("tasks")) {
    localStorage.setItem("tasks", JSON.stringify([]));
  }
};

export const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];
export const getTasks = () => JSON.parse(localStorage.getItem("tasks")) || [];
export const saveTasks = (tasks) =>
  localStorage.setItem("tasks", JSON.stringify(tasks));
