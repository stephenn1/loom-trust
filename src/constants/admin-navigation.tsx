import { FaUsers, FaWallet } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";

export const ADMIN_NAVIGATION = [
  {
    title: "Users",
    url: "/admin/users",
    icon: <FaUsers />,
  },
  {
    title: "Payment Methods",
    url: "/admin/payment-methods",
    icon: <FaWallet />,
  },
  {
    title: "Transactions",
    url: "/admin/transactions",
    icon: <GrTransaction />,
  },
];
