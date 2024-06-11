import React from "react";
import ChartComponent from "@/components/box/top-box/chart-box";
import LayoutMiddleBox from "@/components/box/middle-box/layout";
import LayoutSideBox from "@/components/box/side-box/layout";
import LayoutBottomBox from "@/components/box/bottom-box/layout";
import FDChart from "@/components/box/top-box/timeline-box";

const Layout = () => {
  return (
    <div className="bg-gray-100 w-full lg:px-20 lg:py-8 p-4 min-h-screen items-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">Welcome, Johan Paul</h1>
        <div className="flex gap-3">
          <div className="w-1/3">
            <ChartComponent />
          </div>
          <div className="w-2/3">
            <FDChart />
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col w-2/3 gap-8">
            <LayoutMiddleBox />
            <LayoutBottomBox />
          </div>

          <div className="w-1/3">
            <LayoutSideBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
