import { IconType } from "react-icons";

export interface BankCardProps {
  bg: string;
  logo: string;
  title: string;
  middleBoxBg: string;
  middleBoxDescriptionIconColor: string;
  middleBoxDescription: {
    desc1: string;
    desc2: string;
  };
  interestPercentage: number;
  actionButtonColor: string;
  actionButtonText: string;
  action: () => void;
  middleBoxDescriptionIcons?: {
    desc1Icon: IconType;
    desc2Icon: IconType;
  };
}
