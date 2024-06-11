"use client";

import React, { useState } from "react";
import { IBottomBoxItem } from "@/components/box/bottom-box/types/bottom-box.types";

const BottomBoxItem: React.FC<IBottomBoxItem> = ({ title, description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="flex flex-col gap-4 p-4 bg-white border rounded shadow h-52">
      <h2 className="font-bold whitespace-nowrap">{title}</h2>
      <p>
        {showFullDescription
          ? description
          : `${description.substring(0, 100)}...`}
      </p>
      <button
        className="text-blue-600 hover:text-blue-800 mt-2 self-start" // Corrected class name here
        onClick={() => setShowFullDescription(!showFullDescription)}
      >
        Read more
      </button>
    </div>
  );
};

export default BottomBoxItem;
