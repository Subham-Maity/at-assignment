import { FaCheckCircle } from "react-icons/fa";
import { DataType } from "@/components/box/top-box/types/chart.type";
import { IBottomBoxData } from "@/components/box/bottom-box/types/bottom-box.types";

export const middleBoxData = [
  {
    bg: "bg-[#520b8d]/10",
    logo: "./middle-box/1.png",
    title: "Utkarsh Small Finance Bank",
    middleBoxBg: "bg-[#520b8d]/15",
    middleBoxDescriptionIconColor: "text-[#520b8d]",
    middleBoxDescription: {
      desc1: "Highest Interest Rate",
      desc2: "RBI Insured",
    },
    middleBoxDescriptionIcons: {
      desc1Icon: FaCheckCircle,
      desc2Icon: FaCheckCircle,
    },

    interestPercentage: 9.1,
    actionButtonColor: "bg-[#520b8d]",
    actionButtonText: "Book Now",
    action: () => {
      // Handle action
    },
  },
  // ... Second object
  {
    bg: "bg-[#0072BB]/10",
    logo: "./middle-box/2.png",
    title: "Bajaj Finserv",
    middleBoxBg: "bg-[#0072BB]/15",
    middleBoxDescriptionIconColor: "text-[#0072BB]",
    middleBoxDescription: {
      desc1: "Crisil AAA Rated",
      desc2: "No Video KYC required",
    },
    middleBoxDescriptionIcons: {
      desc1Icon: FaCheckCircle,
      desc2Icon: FaCheckCircle,
    },
    interestPercentage: 8.5,
    actionButtonColor: "bg-[#0072BB]",
    actionButtonText: "Book Now",
    action: () => {
      // Handle action
    },
  },
  // ... Third object
  {
    bg: "bg-[#010101]/10",
    logo: "./middle-box/3.png",
    title: "Shriram Finance",
    middleBoxBg: "bg-[#010101]/15",
    middleBoxDescriptionIconColor: "text-[#010101]",
    middleBoxDescription: {
      desc1: "Crisil AAA Rated",
      desc2: "No Video KYC required",
    },

    middleBoxDescriptionIcons: {
      desc1Icon: FaCheckCircle,
      desc2Icon: FaCheckCircle,
    },

    interestPercentage: 7.8,
    actionButtonColor: "bg-[#010101]",
    actionButtonText: "Book Now",
    action: () => {
      // Handle action
    },
  },
  {
    bg: "bg-[#FF0000]/10",
    logo: "./middle-box/4.png",
    title: "Mahindra Finance",
    middleBoxBg: "bg-[#FF0000]/15",
    middleBoxDescriptionIconColor: "text-[#FF0000]",
    middleBoxDescription: {
      desc1: "Crisil AAA Rated",
      desc2: "No Video KYC required",
    },

    middleBoxDescriptionIcons: {
      desc1Icon: FaCheckCircle,
      desc2Icon: FaCheckCircle,
    },
    interestPercentage: 6.75,
    actionButtonColor: "bg-[#FF0000]",
    actionButtonText: "Book Now",
    action: () => {
      // Handle action
    },
  },
];

export const data: DataType[] = [
  { name: "Bajaj Finserv", value: 25000, color: "#7E5BEF" },
  { name: "Shriram Finance", value: 20000, color: "#FDBA8C" },
  { name: "Mahindra Finance", value: 15000, color: "#A3E635" },
  { name: "Utkarsh Small Finance Bank", value: 40000, color: "#2DD4BF" },
];

export const sideBoxData = [
  {
    topTitle: "Video KYC",
    calendarTitle: "Scheduled On",
    calendarMiddleText: "28",
    calendarBottomText: "Oct, 2023",
    middleTitle: "Utkarsh SF Bank FD Plan 2",
    depositAmt: 20000,
    tenure: "2 Years",
    interestRate: "9.10%",
    button1Text: "Complete Now",
    button1Action: () => {
      // Handle action
    },
    button2Text: "Reschedule",
    button2Action: () => {
      // Handle action
    },
  },
  {
    topTitle: "Pending Payment",
    calendarTitle: "Pay By",
    calendarMiddleText: "30",
    calendarBottomText: "Oct, 2023",
    middleTitle: "Bajaj Finserv Corp FD 1",
    depositAmt: 25000,
    tenure: "18 Months",
    interestRate: "8.10%",
    button1Text: "Pay Now",
    button1Action: () => {
      // Handle action
    },
    button2Text: "Cancel Application",
    button2Action: () => {
      // Handle action
    },
  },
  {
    topTitle: "Upcoming FD Maturity",
    calendarTitle: "Renew by",
    calendarMiddleText: "30",
    calendarBottomText: "Oct, 2023",
    middleTitle: "Shriram Finance Corp FD 1",
    depositAmt: 25000,
    tenure: "18 Months",
    interestRate: "8.10%",
    button1Text: "Renew Now",
    button1Action: () => {
      // Handle action
    },
    button2Text: "Compare other FDs",
    button2Action: () => {
      // Handle action
    },
  },
];
export const bottomBoxData: IBottomBoxData[] = [
  {
    title: "How FDs are taxed",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum ",
  },
  {
    title: "How FDs are taxed",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "How FDs are taxed",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "How FDs are taxed",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "How FDs are taxed",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },

  // ... other items
];
