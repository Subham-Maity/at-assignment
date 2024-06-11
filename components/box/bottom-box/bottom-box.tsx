"use client";

import React, { useState } from "react";
import { IBottomBoxItem } from "@/components/box/bottom-box/types/bottom-box.types";

const BottomBoxItem: React.FC<IBottomBoxItem> = ({ title, description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="flex flex-col p-4 bg-white border rounded shadow w-full ">
      <h2 className="font-bold">{title}</h2>
      <p>
        {showFullDescription
          ? description
          : `${description.substring(0, 100)}...`}
      </p>
      <button
        className="text-blue-600 hover:text-blue-800 mt-2 items-starte"
        onClick={() => setShowFullDescription(!showFullDescription)}
      >
        Read more
      </button>
    </div>
  );
};

export default BottomBoxItem;
