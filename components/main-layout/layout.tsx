import React from "react";
import TimelineBox from "@/components/box/top-box/timeline-box";
import ChartComponent from "@/components/box/top-box/chart-box";
import LayoutMiddleBox from "@/components/box/middle-box/layout";

const Layout = () => {
  return (
    <div className="bg-gray-100 w-full p-16  min-h-screen">
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <div className="w-1/3">
            <ChartComponent />
          </div>
          <div className="w-2/3">
            {/*<TimelineBox />*/}
          </div>
        </div>
        <LayoutMiddleBox />
      </div>
    </div>
  );
};

export default Layout;
