"use client";

import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import BottomBoxItem from "@/components/box/bottom-box/bottom-box";
import { bottomBoxData } from "@/data";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const LayoutBottomBox = () => {
  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [isScrollAtStart, setIsScrollAtStart] = useState(true);
  const [isScrollAtEnd, setIsScrollAtEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setIsScrollAtStart(containerRef.current.scrollLeft === 0);
        setIsScrollAtEnd(
          containerRef.current.scrollLeft ===
            containerRef.current.scrollWidth - containerRef.current.offsetWidth,
        );
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleLeftArrowClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 320;
    }
  };

  const handleRightArrowClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 320;
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-medium text-black">Get Answer</h1>
            <p className="text-2xl font-medium text-black">
              To all your questions
            </p>
          </div>
          <div>
            <div className="flex text-6xl">
              <MdOutlineKeyboardArrowLeft
                className={`cursor-pointer ${
                  isScrollAtStart ? "text-gray-400" : "text-stone-500"
                }`}
                onClick={!isScrollAtStart ? handleLeftArrowClick : undefined}
              />
              <MdOutlineKeyboardArrowRight
                className={`cursor-pointer ${
                  isScrollAtEnd ? "text-gray-400" : "text-stone-500"
                }`}
                onClick={!isScrollAtEnd ? handleRightArrowClick : undefined}
              />
            </div>
          </div>
        </div>
        <div
          className="flex gap-4 overflow-x-auto scrollbar-hide"
          ref={containerRef}
        >
          {bottomBoxData.map((item, index) => (
            <div key={index} className="min-w-[360px] max-w-[360px]">
              <BottomBoxItem key={index} {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LayoutBottomBox;
