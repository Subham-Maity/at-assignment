import React from "react";
import Dropdown from "@/components/ui/custom/select";

const Nav = () => {
  return (
    <nav className="flex justify-between font-medium items-center p-4 bg-white text-white  h-[85px] w-full">
      <div className="flex items-center">
        <img src="/logo/logo.svg" alt="Logo" className="h-8" />
        <span className="font-semibold text-xl tracking-tight ml-2">Re</span>
      </div>
      <div className="flex gap-4 text-black">
        <a href="/dashboard" className="hover:text-gray-600">
          Dashboard
        </a>
        <a href="/faqs" className="hover:text-gray-600">
          FAQs
        </a>
        <a href="/support" className="hover:text-gray-600">
          Support
        </a>
        <Dropdown />
      </div>
    </nav>
  );
};

export default Nav;
