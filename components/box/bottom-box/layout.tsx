"use client";

import React from "react";
import BottomBoxItem from "@/components/box/bottom-box/bottom-box";
import { bottomBoxData } from "@/data";

const LayoutBottomBox = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium text-black">Get Answer</h1>
          <p className="text-2xl font-medium text-black">
            To all your questions
          </p>
        </div>
        <div className="flex justify-between gap-4">
          {bottomBoxData.map((item, index) => (
            <BottomBoxItem key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LayoutBottomBox;
