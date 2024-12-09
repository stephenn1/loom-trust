import { BiSupport } from "react-icons/bi";
import { RiBankCardFill, RiCoinsFill, RiDashboardFill } from "react-icons/ri";
import { TbArrowsExchange } from "react-icons/tb";

export const WEB_APP_NAVIGATION = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: <RiDashboardFill />,
  },
  {
    title: "Trading",
    url: "/trading",
    icon: <RiCoinsFill />,
  },
  {
    title: "Exchange",
    url: "/exchange",
    icon: <TbArrowsExchange />,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: <RiBankCardFill />,
  },
  {
    title: "Support",
    url: "/support",
    icon: <BiSupport />,
  },
];
