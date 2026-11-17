import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)}
      className="rounded-lg p-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white"
    >
      {isDarkMode ? "Switch to Light Mode ☀️" : "Switch to Dark Mode 🌙"}
    </button>
  );
}

export default DarkModeToggle;
