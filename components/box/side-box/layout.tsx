"use client";
import React from "react";
import { sideBoxData } from "@/data";
import SideBox from "@/components/box/side-box/sidebox";

const LayoutSideBox = () => {
  return (
    <div className="flex flex-col rounded-sm">
      {sideBoxData.map((item, index) => (
        <SideBox key={index} {...item} />
      ))}
    </div>
  );
};

export default LayoutSideBox;
