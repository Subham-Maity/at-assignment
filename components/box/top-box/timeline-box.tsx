"use client";
import React, { useEffect, useRef } from "react";
import { DataSet, Timeline } from "vis-timeline/standalone";
import moment from "moment";
import "vis-timeline/styles/vis-timeline-graph2d.min.css";

const FdMaturityTimeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;
    const items = new DataSet([
      {
        id: 1,
        content: "Utkarsh FD 1",
        start: moment("2024-01-01"),
        end: moment("2024-09-01"),
        className: "blue-item",
      },
      {
        id: 2,
        content: "Shriram FD Plan 2",
        start: moment("2024-03-01"),
        end: moment("2024-12-01"),
        className: "blue-item",
      },
      {
        id: 3,
        content: "Bajaj Finserv FD 1",
        start: moment("2024-04-01"),
        end: moment("2025-04-01"),
        className: "blue-item",
      },
      {
        id: 4,
        content: "Mahindra FD Plan 2",
        start: moment("2024-04-01"),
        end: moment("2026-04-01"),
        className: "blue-item",
      },
    ]);

    const options = {
      start: "2024-01-01",
      end: "2026-12-31",
      editable: false,
      stack: false,
      margin: {
        item: 20,
        axis: 40,
      },
      orientation: "top",
    };
    //@ts-ignore
    const timeline = new Timeline(container, items, options);

    return () => {
      timeline.destroy();
    };
  }, []);

  return (
    <div className=" w-full ">
      <div className="p-6 h-[400px] bg-white rounded-lg shadow-lg w-full">
        <h2 className="text-xl  font-semibold mb-4">FD Maturity Timeline</h2>
        <div ref={timelineRef}></div>
      </div>
    </div>
  );
};

export default FdMaturityTimeline;
