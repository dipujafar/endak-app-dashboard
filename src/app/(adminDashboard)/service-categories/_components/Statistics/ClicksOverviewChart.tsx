"use client";
import { CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { clicksStatData } from "./data";

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-3 shadow-md rounded-md border border-gray-100">
        <p className="text-sm font-medium text-purple-700">
          {payload[0].value.toLocaleString()}
        </p>
        <p className="text-xs text-gray-500">{payload[0].payload.month}</p>
      </div>
    );
  }
  return null;
};

interface EarningsChartProps {
  className?: string;
}

const ClicksOverviewChart = ({ className }: EarningsChartProps) => {
  return (
    <div className={`p-6 bg-[#F9F9FA] border-none rounded-2xl  ${className}`}>
      <div className="flex justify-between items-center mb-5">
        <div className="flex-1">
          <CardTitle className="text-xl font-semibold flex items-center">
            Clicks Overview
          </CardTitle>
        </div>
      </div>

      <div>
        <ChartContainer
          config={{
            expense: { theme: { light: "#F9F9FA", dark: "#EEEEEFss" } }, // Rose
          }}
          className="h-[200px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={clicksStatData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              className="h-[300px]"
            >
              <defs>
                <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="20%" stopColor="#000" stopOpacity={0.08} />
                  <stop offset="80%" stopColor="#F9F9FA" stopOpacity={0} />
                </linearGradient>
              </defs>
              {/* <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              /> */}
              <YAxis
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${value / 1000}k`}
              />
              <ChartTooltip content={<CustomTooltip />} />

              <Area
                type="monotone"
                dataKey="view"
                stroke="#00000066"
                strokeWidth={1}
                fillOpacity={1}
                fill="url(#colorExpense)"
                activeDot={{
                  r: 6,
                  fill: "#8b5cf6",
                  stroke: "#F7F7F8",
                  strokeWidth: 2,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default ClicksOverviewChart;
