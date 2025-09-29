import { Button, DatePicker, DatePickerProps, Input, Select } from "antd";
import { ArrowDownToLine } from "lucide-react";

export default function TopBarFilterOption() {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="flex gap-x-5 justify-between items-center">
      <div className="flex-1">
        <Input.Search placeholder="Search here..." size="large" />
      </div>
      <div className="flex-1 w-full">
        <DatePicker
          onChange={onChange}
          className="w-full h-[40px] !border-main-color"
          placeholder="Sort by Date"
        />
      </div>
      <div className="flex-1">
        <Select
          placeholder="Sort by Price"
          style={{ width: 120 }}
          onChange={handleChange}
          className="!h-[40px] !border-main-color !w-full"
          options={[
            { value: "highToLow", label: "Highest to Lowest " },
            { value: "lowToHigh", label: "Lowest to Highest  " },
          ]}
        />
      </div>
      <div className="flex-1">
        <Button className="!bg-main-color !h-[40px] !w-full">
          Export <ArrowDownToLine size={16} />
        </Button>
      </div>
    </div>
  );
}
