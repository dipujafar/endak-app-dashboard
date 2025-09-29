"use client";
import { Input, TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import TopBarFilterOption from "./TopBarFilterOption";
import { ArrowDownNarrowWide } from "lucide-react";

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
  commissionCategory: string;
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
  commissionCategory: "Home Service",
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
      title: "Service Category",
      dataIndex: "commissionCategory",
      filters: [
        {
          text: "Home Service",
          value: "Home Service",
        },
        {
          text: "Medicine",
          value: "Medicine",
        },
        {
          text: "Professionals",
          value: "Professionals",
        },
        {
          text: "Administration",
          value: "Administration",
        },
        {
          text: "Transportation",
          value: "Transportation",
        },
        {
          text: "Construction",
          value: "Construction",
        },
        {
          text: "Sports",
          value: "Sports",
        },
        {
          text: "Food",
          value: "Food",
        },
      ],
      filterIcon: <ArrowDownNarrowWide color="#fff" />,
      onFilter: (value, record) =>
        record.commissionCategory.indexOf(value as string) === 0,
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
    <div className="bg-section-bg rounded-3xl space-y-3">
      <TopBarFilterOption />
      <DataTable columns={columns} data={data} pageSize={10}></DataTable>
    </div>
  );
};

export default CommissionEarningsTable;
