import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-3xl text-blue-600">Welcome </h2>

      <button
        onClick={handleLogout}
        className="text-white mt-4 text-lg bg-gray-800 p-4"
      >
        Log out
      </button>
    </div>
  );
}
export default Dashboard;
