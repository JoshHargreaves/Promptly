"use client";
import { useState } from "react";
import { FiBriefcase, FiTrendingUp, FiEdit, FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Sidebar() {
  type DropdownItem = "career" | "marketing" | "content" | null;
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
                  <a href="#" className="block py-1 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    Job Description
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    Interview Preparation
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    Resume Tips
                  </a>
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
                  <a href="#" className="block py-1 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    Ad Copy
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    SEO Suggestions
                  </a>
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
                  <a href="#" className="block py-1 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    Blog Outlines
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-1 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    Social Media Posts
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
}
