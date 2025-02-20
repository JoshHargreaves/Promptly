"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FiSun,
  FiMoon,
  FiHome,
  FiSettings,
  FiBell,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";

type Dropdown = "dashboard" | "settings" | "notifications" | null;

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        {/* Header with Navigation component */}
        <header className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-6 shadow flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl font-bold">Promptly</h1>
          <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        </header>

        <div className="flex flex-1">
          {/* Replace inline sidebar with Sidebar component */}
          <Sidebar />
          <main className="flex-1 p-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-8">
              <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                Welcome to Promptly
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Hey there! Welcome to Promptly – an app where you can share and discover awesome prompts that make your work and creativity easier. It's a laid-back space for everyone to drop in their favorite prompts, find new ideas, and help each other out. Whether you’re looking for a spark to kick off your next project or just curious about what others are using, Promptly is your go-to spot for useful, user-curated prompts. Jump in and start sharing!
              </p>
              <div className="flex justify-center">
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
