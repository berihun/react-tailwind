import { Outlet } from "react-router-dom";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-3xl text-blue-600">About Page </h2>
      <p className="text-green-500 mt-4 text-lg">
        This page provides information about us. Learn more about our mission,
        values, etc.
      </p>
      <div className="mt-8 w-full max-w-4xl">
        <Outlet />
      </div>
    </div>
  );
}
export default About;
