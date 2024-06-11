import React from "react";
import Nav from "@/components/nav/nav";
import Layout from "@/components/main-layout/layout";

const DashLayout = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <Nav /> {/* Assign a fixed height to Nav */}
      <div
        className="bg-stone-300 flex-grow overflow-auto"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <Layout />
      </div>
    </div>
  );
};

export default DashLayout;
