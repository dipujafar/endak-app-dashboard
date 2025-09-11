import StatCard from "@/components/(adminDashboard)/cards/statCard";
import { cn } from "@/lib/utils";
import React from "react";

const statData = [
  {
    id: 1,
    title: "Total Earning",
    amount: "$1,250.00",
    increase: true,
    days: "30",
    growth: "12%",
  },
  {
    id: 2,
    title: "Total Subscription Purchased",
    amount: "200",
    increase: false,
    days: "30",
    growth: "12%",
  },
];

export default function Stat() {
  return (
    <div className="grid  md:grid-cols-2 grid-cols-1 xl:gap-5 gap-3">
      {statData?.map((item) => (
        <div key={item.id}>
          <StatCard {...item} />
        </div>
      ))}
    </div>
  );
}
