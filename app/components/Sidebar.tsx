"use client";
import { useState } from "react";
import { FiBriefcase, FiTrendingUp, FiEdit, FiChevronDown, FiChevronUp } from "react-icons/fi";

type DropdownItem = "career" | "marketing" | "content" | null;

type SidebarProps = {
  onSelectPrompt: (promptKey: string) => void;
};

export default function Sidebar({ onSelectPrompt }: SidebarProps) {
  const [openDropdown, setOpenDropdown] = useState<DropdownItem>(null);

  const handleDropdownToggle = (item: "career" | "marketing" | "content") => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 space-y-4 shadow">
      <nav>
        <ul>
          <li>
            <button
              onClick={() => handleDropdownToggle("career")}
              className="flex items-center justify-between w-full py-3 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            >
              <div className="flex items-center space-x-3">
                <FiBriefcase className="text-2xl" />
                <span className="font-medium">Career/Jobs</span>
              </div>
              {openDropdown === "career" ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {openDropdown === "career" && (
              <ul className="mt-2 ml-6 space-y-2">
                <li>
                  <button
                    onClick={() => onSelectPrompt("jobDescription")}
                    className="block w-full text-left py-1 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  >
                    Job Description
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onSelectPrompt("interviewPreparation")}
                    className="block w-full text-left py-1 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  >
                    Interview Preparation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onSelectPrompt("resumeTips")}
                    className="block w-full text-left py-1 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  >
                    Resume Tips
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => handleDropdownToggle("marketing")}
              className="flex items-center justify-between w-full py-3 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            >
              <div className="flex items-center space-x-3">
                <FiTrendingUp className="text-2xl" />
                <span className="font-medium">Marketing</span>
              </div>
              {openDropdown === "marketing" ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {openDropdown === "marketing" && (
              <ul className="mt-2 ml-6 space-y-2">
                <li>
                  <button
                    onClick={() => onSelectPrompt("adCopy")}
                    className="block w-full text-left py-1 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  >
                    Ad Copy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onSelectPrompt("seoSuggestions")}
                    className="block w-full text-left py-1 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  >
                    SEO Suggestions
                  </button>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => handleDropdownToggle("content")}
              className="flex items-center justify-between w-full py-3 px-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            >
              <div className="flex items-center space-x-3">
                <FiEdit className="text-2xl" />
                <span className="font-medium">Content</span>
              </div>
              {openDropdown === "content" ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {openDropdown === "content" && (
              <ul className="mt-2 ml-6 space-y-2">
                <li>
                  <button
                    onClick={() => onSelectPrompt("blogOutlines")}
                    className="block w-full text-left py-1 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  >
                    Blog Outlines
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onSelectPrompt("socialMediaPosts")}
                    className="block w-full text-left py-1 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                  >
                    Social Media Posts
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
}
