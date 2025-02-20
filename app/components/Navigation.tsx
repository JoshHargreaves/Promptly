"use client";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

type NavigationProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export default function Navigation({ darkMode, setDarkMode }: NavigationProps) {
  return (
    <nav className="flex items-center space-x-6">
      {/* GitHub icon linking to the repository */}
      <a
        href="https://github.com/JoshHargreaves/Promptly"
        target="_blank"
        rel="noreferrer"
        className="text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition"
      >
        <FaGithub className="text-xl" />
      </a>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 p-2 rounded-md bg-gray-200 dark:bg-gray-700 transition"
      >
        {darkMode ? (
          <FiSun className="text-xl text-yellow-500" />
        ) : (
          <FiMoon className="text-xl text-gray-800" />
        )}
      </button>
    </nav>
  );
}
