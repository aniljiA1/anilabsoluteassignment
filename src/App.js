import { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/AuthContext";
import LoginForm from "./components/LoginForm";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import { initData } from "./utils/storage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    initData();
  }, []);

  if (!user) return <LoginForm />;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-bold">
            Welcome {user.username} ({user.role})
          </h1>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        {user.role === "admin" ? <AdminDashboard /> : <UserDashboard />}
      </div>
    </DndProvider>
  );
};

export default App;
