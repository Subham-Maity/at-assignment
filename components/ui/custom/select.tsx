"use client";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp, FaUser } from "react-icons/fa";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left font-bold text-xl">
      <button
        className="flex items-center gap-2 p-2 bg-white border border-[#4a4ed4] shadow rounded-full"
        onClick={toggleDropdown}
      >
        <FaUser className="text-[#4a4ed4]" />
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white border border-gray-200 rounded shadow-lg gap-4">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="/profile"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <img src="/core/select/s-p.svg" alt="Logo" className="h-5" /> My
              Profile
            </a>
            <a
              href="/fds"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <img src="/core/select/s--m-fd.svg" alt="Logo" className="h-5" />{" "}
              My FDs
            </a>
            <a
              href="/transactions"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <img src="/core/select/s-bar-t.svg" alt="Logo" className="h-5" />{" "}
              My Transactions
            </a>
            <a
              href="/logout"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              <img src="/core/select/s-log.svg" alt="Logo" className="h-5" />{" "}
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
