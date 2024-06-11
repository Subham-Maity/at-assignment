"use client";
import React from "react";
import BankCard from "@/components/box/middle-box/bank-card";
import { middleBoxData } from "@/data";

const LayoutMiddleBox = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {middleBoxData.map((bankData, index) => (
          <BankCard key={index} {...bankData} />
        ))}
      </div>
    </div>
  );
};

export default LayoutMiddleBox;
