import React from "react";
import ChartComponent from "@/components/box/top-box/chart-box";
import LayoutMiddleBox from "@/components/box/middle-box/layout";
import LayoutSideBox from "@/components/box/side-box/layout";
import LayoutBottomBox from "@/components/box/bottom-box/layout";
import FDChart from "@/components/box/top-box/timeline-box";

const Layout = () => {
  return (
    <div className="bg-gray-100 w-full lg:px-20 lg:py-8 p-4 min-h-screen flex flex-col items-center">
      <div className="flex flex-col gap-3 w-full">
        <h1 className="text-2xl font-bold text-center lg:text-left">
          Welcome, Johan Paul
        </h1>
        <div className="flex flex-col lg:flex-row gap-3 w-full">
          <div className="w-full lg:w-1/3">
            <ChartComponent />
          </div>
          <div className="w-full lg:w-2/3">
            <FDChart />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4 w-full">
          <div className="flex flex-col w-full lg:w-2/3 gap-8">
            <LayoutMiddleBox />
            <LayoutBottomBox />
          </div>
          <div className="w-full lg:w-1/3">
            <LayoutSideBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
