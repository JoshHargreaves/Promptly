"use client";
import { useState } from "react";
import Image from "next/image";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
// Import each prompt JSON separately
import jobDescription from "../database/Career/jobDescription.json";
import interviewPreparation from "../database/Career/interviewPreparation.json";
import resumeTips from "../database/Career/resumeTips.json";
import adCopy from "../database/Marketing/adCopy.json";
import seoSuggestions from "../database/Marketing/seoSuggestions.json";
import blogOutlines from "../database/Content/blogOutlines.json";
import socialMediaPosts from "../database/Content/socialMediaPosts.json";

// Create a mapping between prompt keys and the JSON data
const promptDataMapping: { [key: string]: { title: string; promptData: string } } = {
  jobDescription,
  interviewPreparation,
  resumeTips,
  adCopy,
  seoSuggestions,
  blogOutlines,
  socialMediaPosts,
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedPromptId, setSelectedPromptId] = useState<string | null>(null);

  const promptText = selectedPromptId ? promptDataMapping[selectedPromptId]?.promptData : null;

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-6 shadow flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-3xl font-bold">Promptly</h1>
          <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
        </header>
        <div className="flex flex-1">
          {/* Sidebar with prompt selection */}
          <Sidebar onSelectPrompt={setSelectedPromptId} />
          {/* Main content */}
          <main className="flex-1 p-8">
            {promptText ? (
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-8">
                <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                  {promptDataMapping[selectedPromptId!].title}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">{promptText}</p>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-8">
                <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                  Welcome to Promptly
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Hey there! Welcome to Promptly – an app where you can share and discover
                  awesome prompts that will make your work and creativity easier...
                </p>
                <div className="flex justify-center">
                  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
