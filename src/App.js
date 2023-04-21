import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Carousel from "./components/Carousel";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="h-screen bg-white dark:bg-black">
      <Sidebar />
      <button
        className="bg-green p-4 rounded-3xl text-black dark:text-white"
        onClick={toggleTheme}
      >
        Dark Mode
      </button>
      <h1 className="text-black dark:text-white">My Portfolio</h1>
      <div>
        <Carousel />
        <Footer />
      </div>
    </div>
  );
}

export default App;
