import StatCard from "@/components/(adminDashboard)/cards/statCard";
import { cn } from "@/lib/utils";
import React from "react";

const statData = [
  {
    id: 1,
    title: "Total Users",
    amount: "1220",
    increase: false,
    days: "30",
    growth: "12%",
  },
  {
    id: 2,
    title: "Total Vendors",
    amount: "450",
    increase: true,
    days: "30",
    growth: "12%",
  },
  {
    id: 3,
    title: "Profile Completed",
    amount: "1220",
    increase: false,
    days: "30",
    growth: "12%",
  },
  {
    id: 4,
    title: "Profile Incomplete",
    amount: "88",
    increase: false,
    days: "30",
    growth: "12%",
  },
  {
    id: 5,
    title: "Guest User",
    amount: "50",
    increase: true,
    days: "30",
    growth: "12%",
  },
  {
    id: 5,
    title: "Active User",
    amount: "60",
    increase: false,
    days: "30",
    growth: "12%",
  },
];

export default function StatContainer() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-5 gap-3">
      {statData?.map((item) => (
        <div key={item.id}>
          <StatCard {...item} />
        </div>
      ))}
    </div>
  );
}
