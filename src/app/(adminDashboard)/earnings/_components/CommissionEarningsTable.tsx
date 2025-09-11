"use client";;
import { Input, TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  email: string;
  date: string;
  type: string;
  subscriptionType: string;
  amount: string;
  commission: string;
};

const data: TDataType[] = Array.from({ length: 20 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "Mr. Khalid Endak",
  email: "endakkhalid@gmail.com",
  type: "Vendor",
  date: "11 Sep, 2025",
  subscriptionType: inx % 2 === 0 ? "Yearly" : "Monthly",
  amount: "$270.00",
  commission: "1%",
}));

const CommissionEarningsTable = () => {
  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Serial",
      dataIndex: "serial",
      render: (text) => <p>#{text}</p>,
    },
    {
      title: "Provider Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
     {
      title: "Transaction Price",
      dataIndex: "amount",
    },
    {
      title: "Commission",
      dataIndex: "commission",
      align: "center",
    },
   
    {
      title: "Transaction Date",
      dataIndex: "date",
      align: "center",
    },

    
  ];

  return (
    <div className="bg-section-bg rounded-3xl">
      <div className="max-w-[400px] ml-auto mb-2 pt-2">
        <Input.Search placeholder="Search here..." size="large" />
      </div>
      <DataTable columns={columns} data={data} pageSize={10}></DataTable>
    </div>
  );
};

export default CommissionEarningsTable;
