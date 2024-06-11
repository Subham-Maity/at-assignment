"use client";
import React from "react";
import { BankCardProps } from "@/components/box/middle-box/types/bank-card-props.types";

const BankCard: React.FC<BankCardProps> = ({
  bg,
  logo,
  title,
  middleBoxBg,
  middleBoxDescriptionIconColor,
  middleBoxDescription,
  interestPercentage,
  actionButtonColor,
  actionButtonText,
  action,
  middleBoxDescriptionIcons,
}) => {
  return (
    <div className="bg-white p-2">
      <div className={`rounded-sm shadow-md p-8 ${bg} flex flex-col gap-8`}>
        <div className="flex items-center">
          <img src={logo} alt={title} className="h-8 mr-2" />
          <h3 className="text-black font-bold text-xl ">{title}</h3>
        </div>
        <div className={`rounded-md flex gap-2`}>
          <div className={`flex items-center  ${middleBoxBg} rounded-md p-2`}>
            {middleBoxDescriptionIcons?.desc1Icon && (
              <middleBoxDescriptionIcons.desc1Icon
                className={`${middleBoxDescriptionIconColor} mr-2`}
              />
            )}
            <p>{middleBoxDescription.desc1}</p>
          </div>
          <div className={`flex items-center  ${middleBoxBg} rounded-md p-2`}>
            {middleBoxDescriptionIcons?.desc2Icon && (
              <middleBoxDescriptionIcons.desc2Icon
                className={`${middleBoxDescriptionIconColor} mr-2`}
              />
            )}
            <p>{middleBoxDescription.desc2}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex-col flex-shrink-0">
            <p className="text-stone-500 text-sm">Interest Upto</p>
            <p className="text-stone-900 font-bold text-md">
              {interestPercentage}% p.a
            </p>
          </div>
          <button
            className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none ${actionButtonColor} rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100`}
            onClick={action}
          >
            {actionButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankCard;
