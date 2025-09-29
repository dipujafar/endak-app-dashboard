"use client";

import { useState } from "react";
import { DatePicker, Button } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import dayjs, { type Dayjs } from "dayjs";

const { RangePicker } = DatePicker;

type DateRange = [Dayjs | null, Dayjs | null] | null;

interface DateRangeFilterProps {
  onDateRangeChange?: (range: DateRange, rangeType: string) => void;
}

export default function FilterBar({ onDateRangeChange }: DateRangeFilterProps) {
  const [selectedRange, setSelectedRange] = useState<string>("today");
  const [customRange, setCustomRange] = useState<DateRange>(null);
  const [showCustomPicker, setShowCustomPicker] = useState(false);

  console.log("selectedRange", selectedRange);

  const handleQuickRangeSelect = (rangeType: string) => {
    setSelectedRange(rangeType);
    setShowCustomPicker(false);

    let range: DateRange = null;
    const today = dayjs();

    switch (rangeType) {
      case "today":
        range = [today.startOf("day"), today.endOf("day")];
        break;
      case "last7days":
        range = [today.subtract(6, "day").startOf("day"), today.endOf("day")];
        break;
      case "last30days":
        range = [today.subtract(29, "day").startOf("day"), today.endOf("day")];
        break;
    }

    onDateRangeChange?.(range, rangeType);
  };

  const handleCustomRangeSelect = () => {
    setSelectedRange("custom");
    setShowCustomPicker(true);
  };

  const handleCustomRangeChange = (dates: DateRange) => {
    setCustomRange(dates);
    if (dates) {
      onDateRangeChange?.(dates, "custom");
    }
  };

  const quickRangeButtons = [
    { key: "today", label: "Today" },
    { key: "last7days", label: "Last 7 Days" },
    { key: "last30days", label: "Last 30 Days" },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-4">
        {/* Header */}
        <div className="flex items-center gap-2 text-gray-700">
          <CalendarOutlined className="text-purple-600 text-lg" />
        </div>

        {/* Quick Range Buttons */}
        <div className="flex items-center gap-2">
          {quickRangeButtons.map((button) => (
            <Button
              key={button.key}
              type={selectedRange === button.key ? "primary" : "default"}
              size="small"
              onClick={() => handleQuickRangeSelect(button.key)}
              className={`
                ${
                  selectedRange === button.key
                    ? "!bg-purple-600 !border-purple-600 !hover:bg-purple-700"
                    : "!bg-gray-50 !border-gray-200 !text-gray-600 !hover:bg-gray-100"
                }
              `}
            >
              {button.label}
            </Button>
          ))}

          {/* Custom Range Button */}
          <Button
            type={selectedRange === "custom" ? "primary" : "default"}
            size="small"
            icon={<CalendarOutlined />}
            onClick={handleCustomRangeSelect}
            className={`
              ${
                selectedRange === "custom"
                  ? "!bg-purple-600 !border-purple-600 !hover:bg-purple-700"
                  : "!bg-gray-50 !border-gray-200 !text-gray-600 !hover:bg-gray-100"
              }
            `}
          >
            Custom Range
          </Button>
        </div>

        {/* Custom Date Range Picker */}
        {showCustomPicker && (
          <div className="ml-4">
            <RangePicker
              value={customRange}
              onChange={handleCustomRangeChange}
              size="small"
              placeholder={["Start Date", "End Date"]}
              className="border-purple-200 focus:border-purple-400"
            />
          </div>
        )}
      </div>
    </div>
  );
}
