import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-3xl text-blue-600">Home Page </h2>
      <p className="text-green-500 mt-4 text-lg">
        Welcome to the Home page! Explore this site to learn more.
      </p>

      <button
        onClick={handleLogin}
        className="text-white mt-4 text-lg bg-gray-800 p-4"
      >
        Login
      </button>
    </div>
  );
}
export default Home;
