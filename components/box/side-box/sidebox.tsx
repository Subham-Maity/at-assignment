import React from "react";
import { SideBoxType } from "@/components/box/side-box/type/sidebox.type";

interface CardProps extends SideBoxType {}

const SideBox: React.FC<CardProps> = ({
  topTitle,
  calendarTitle,
  calendarMiddleText,
  calendarBottomText,
  middleTitle,
  depositAmt,
  tenure,
  interestRate,
  button1Text,
  button1Action,
  button2Text,
  button2Action,
}) => {
  return (
    <div className="flex flex-col gap-6 bg-white p-4 shadow-md w-full h-70 border">
      <h3 className="text-lg font-bold mb-2">{topTitle}</h3>
      <div className="flex">
        <div className="flex flex-col mb-2">
          <div className="mr-2">
            <p className="text-md font-light text-stone-600 mb-2">
              {calendarTitle}
            </p>
          </div>
          <div className="bg-[#f3f3f4] text-bleck font-extrabold text-4xl rounded-sm w-20 h-16 flex items-center justify-center mr-2">
            {calendarMiddleText}
          </div>
          <p className="text-xs text-white justify-center bg-red-600 w-20 h-4 whitespace-nowrap pl-2 pr-1">
            {calendarBottomText}
          </p>
        </div>
        <div className="text-xl flex flex-col gap-4 text-md items-center mb-2">
          <p className=" font-bold mr-2">{middleTitle}</p>
          <div className="flex gap-6 font-light text-stone-600">
            <p className="flex flex-col gap-4 text-sm font-bold mb-2">
              <span className="font-medium text-stone-600 ">Deposit Amt: </span>
              <span> Rs.{depositAmt}</span>
            </p>
            <p className="flex flex-col gap-4 text-sm font-bold mb-2">
              <span className="font-medium text-stone-600 ">Tenure: </span>
              <span> {tenure}</span>
            </p>
            <p className="flex flex-col gap-4 text-sm font-bold mb-2">
              <span className="font-medium text-stone-600 ">
                Interest Rate:{" "}
              </span>
              <span> {interestRate}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <button
          className="bg-[#3b39d9] w-full text-white px-4 py-2 rounded-md"
          onClick={button1Action}
        >
          {button1Text}
        </button>
        <button
          className="bg-[#ffffff] w-full border-2 border-[#3b39d9] text-[#3b39d9] px-4 py-2 rounded-md"
          onClick={button2Action}
        >
          {button2Text}
        </button>
      </div>
    </div>
  );
};

export default SideBox;
