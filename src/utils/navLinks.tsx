import { RiDashboardHorizontalFill } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";
import {
  Bell,
  ClipboardList,
  Crown,
  MessageCircle,
  MessageSquareText,
  NotebookPen,
  NotepadText,
  Podcast,
  TableCellsMerge,
  UserCog,
  UsersRound,
  Wallet,
} from "lucide-react";

export const navLinks = [
  {
    key: "dashboard",
    icon: <RiDashboardHorizontalFill size={18} />,
    label: <Link href={"/dashboard"}>Dashboard</Link>,
  },
  {
    key: "account-details",
    icon: <UsersRound size={18} />,
    label: <Link href={"/account-details"}>Account Details</Link>,
  },
  {
    key: "earnings",
    icon: <Wallet size={18} />,
    label: <Link href={"/earnings"}>Earnings</Link>,
  },
  {
    key: "banner",
    icon: <TableCellsMerge size={18} />,
    label: "Banner",
    children: [
      {
        key: "ads-banner",
        label: <Link href={"/ads-banner"}>Ads Banner </Link>,
      },
      { key: "banner", label: <Link href={"/banner"}>Banner </Link> },
    ],
  },
  {
    key: "service-categories",
    icon: <NotepadText size={18} />,
    label: <Link href={"/service-categories"}>Service Categories</Link>,
  },
  {
    key: "manage-subs",
    icon: <Crown size={18} />,
    label: <Link href={"/manage-subs"}>Manage Subs</Link>,
  },
  {
    key: "report",
    icon: <ClipboardList size={18} />,
    label: <Link href={"/report"}>Report</Link>,
  },
  {
    key: "agreement",
    icon: <NotebookPen size={18} />,
    label: <Link href={"/agreement"}>Agreement</Link>,
  },
  {
    key: "push-notification",
    icon: <Bell size={18} />,
    label: <Link href={"/push-notification"}>Push Notification</Link>,
  },
  {
    key: "messages",
    icon: <MessageSquareText size={18} />,
    label: <Link href={"/message"}>Message</Link>,
  },

  {
    key: "settings",
    icon: <IoSettingsOutline size={18} />,
    label: <Link href={"/settings"}>Settings</Link>,
  },
  // {
  //   key: "logout",
  //   icon: <RiLogoutCircleLine size={18} />,
  //   label: <Link href={"/login"}>Logout</Link>,
  // },
];
