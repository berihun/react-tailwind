import "./App.css";
import DarkModeToggle from "./DarkModeToggle";

function App() {
  return (
    <div className="bg-white  min-h-screen dark:bg-gray-900 dark:text-amber-300 ">
      <DarkModeToggle />

      <h1 className="text-2xl">Welcome to Dark Mode</h1>
      <p>This is an example of implementing dark mode using Tailwind CSS</p>
    </div>
  );
}

export default App;
