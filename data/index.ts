import { FaCheckCircle } from "react-icons/fa";

export const middleBoxData = [
  {
    bg: "bg-[#520b8d]/10",
    logo: "./middle-box/1.png",
    title: "Bank Name",
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
    title: "Second Bank",
    middleBoxBg: "bg-[#0072BB]/15",
    middleBoxDescriptionIconColor: "text-[#0072BB]",
    middleBoxDescription: {
      desc1: "Secure Savings",
      desc2: "Trusted by Millions",
    },
    middleBoxDescriptionIcons: {
      desc1Icon: FaCheckCircle,
      desc2Icon: FaCheckCircle,
    },
    interestPercentage: 8.5,
    actionButtonColor: "bg-[#0072BB]",
    actionButtonText: "Join Now",
    action: () => {
      // Handle action
    },
  },
  // ... Third object
  {
    bg: "bg-[#010101]/10",
    logo: "./middle-box/3.png",
    title: "Third Bank",
    middleBoxBg: "bg-[#010101]/15",
    middleBoxDescriptionIconColor: "text-[#010101]",
    middleBoxDescription: {
      desc1: "Easy Transactions",
      desc2: "24/7 Customer Support",
    },

    middleBoxDescriptionIcons: {
      desc1Icon: FaCheckCircle,
      desc2Icon: FaCheckCircle,
    },

    interestPercentage: 7.8,
    actionButtonColor: "bg-[#010101]",
    actionButtonText: "Get Started",
    action: () => {
      // Handle action
    },
  },
  // ... Fourth object
  {
    bg: "bg-[#FF0000]/10",
    logo: "./middle-box/4.png",
    title: "Fourth Bank",
    middleBoxBg: "bg-[#FF0000]/15",
    middleBoxDescriptionIconColor: "text-[#FF0000]",
    middleBoxDescription: {
      desc1: "Free ATM Withdrawals",
      desc2: "No Hidden Fees",
    },

    middleBoxDescriptionIcons: {
      desc1Icon: FaCheckCircle,
      desc2Icon: FaCheckCircle,
    },
    interestPercentage: 6.75,
    actionButtonColor: "bg-[#FF0000]",
    actionButtonText: "Get Started",
    action: () => {
      // Handle action
    },
  },
];
