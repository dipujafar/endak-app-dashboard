"use client";
import { Select } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

const data = [
  { name: "Jan", user: 100, vendor: 40 },
  { name: "Feb", user: 310, vendor: 45 },
  { name: "Mar", user: 150, vendor: 47 },
  { name: "Apr", user: 150, vendor: 48 },
  { name: "May", user: 180, vendor: 52 },
  { name: "Jun", user: 200, vendor: 54 },
  { name: "Jul", user: 320, vendor: 60 },
  { name: "Aug", user: 230, vendor: 69 },
  { name: "Sep", user: 250, vendor: 73 },
  { name: "Oct", user: 180, vendor: 78 },
  { name: "Nov", user: 300, vendor: 82 },
  { name: "Dec", user: 150, vendor: 90 },
];

const UserOverViewChart = () => {
  const [selectedYear, setSelectedYear] = useState<string>(
    new Date().getFullYear().toString()
  );
  const [selectedUserType, setSelectedUserType] = useState("user");

  const yearsOption = Array(5)
    .fill(0)
    .map((_, index) => new Date().getFullYear() - index);

  const handleChange = (value: string) => {
    setSelectedYear(value);
  };
  const handleUserChange = (value: string) => {
    setSelectedUserType(value);
  };

  return (
    <div className="  rounded-lg p-8 w-full bg-[#fff] ">
      <div className="flex lg:flex-wrap xl:flex-nowrap justify-between items-center mb-10 gap-2">
        <h1 className="text-xl text-black/70">User Overview</h1>

        <div className="flex gap-x-2 items-center ">
          <h1>
            Account Type:
            <Select
              defaultValue={selectedUserType}
              value={selectedUserType}
              style={{
                width: 150,
                marginLeft: "5px",
              }}
              onChange={handleUserChange}
              options={[
                { value: "user", label: "User" },
                { value: "vendor", label: "Vendor" },
              ]}
            />
          </h1>

          <Select
            value={selectedYear}
            style={{ width: 120 }}
            onChange={handleChange}
            options={yearsOption.map((year) => ({
              value: year.toString(),
              label: year.toString(),
            }))}
          />
        </div>
      </div>

      <div className=" flex gap-x-3 justify-center items-center">
        <div className="flex gap-x-1">
          <p className="bg-[#8243EE] p-2 rounded-full w-fit"></p>
          <p className="text-[11px]">User</p>
        </div>
        <div className="flex gap-x-1">
          <p className="bg-[#D8C5FA] p-2 rounded-full w-fit"></p>
          <p className="text-[11px]">Vendors</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}

          <Bar dataKey="user" stackId="a" fill="#8243EE" barSize={50} />
          <Bar dataKey="vendor" stackId="a" fill="#D8C5FA" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserOverViewChart;
