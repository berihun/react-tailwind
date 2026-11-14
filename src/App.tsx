import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-100 p-2">
      <ul className="list-none md:flex md:gap-4">
        <li className="bg-custom-blue text-white p-2 m-2 rounded-lg md:px-4">
          Item 1
        </li>
        <li className="bg-custom-blue text-white p-2 m-2 rounded-lg">Item 2</li>
        <li className="bg-custom-blue text-white p-2 m-2 rounded-lg">Item 3</li>
        <li className="bg-custom-blue text-white p-2 m-2 rounded-lg">Item 4</li>
      </ul>
    </div>
  );
}

export default App;
