"use client";
import { Dropdown, MenuProps, TableProps } from "antd";
import { ArrowDownNarrowWide } from "lucide-react";
import DataTable from "@/utils/DataTable";
import TopBarFilterOption from "./TopBarFilterOption";

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
  subCategory?: string;
};

const data: TDataType[] = Array.from({ length: 20 }).map((_, inx) => ({
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
  subCategory: inx % 2 === 0 ? "Cleaning" : "Plumbing",
}));

// Main categories with subcategories
const categoryMenu: MenuProps["items"] = [
  {
    key: "home-service",
    label: "Home Service",
    children: [
      { key: "home-service:cleaning", label: "Cleaning" },
      { key: "home-service:plumbing", label: "Plumbing" },
      { key: "home-service:ac-repair", label: "AC Repair" },
    ],
  },
  {
    key: "medicine",
    label: "Medicine",
    children: [
      { key: "medicine:pharmacy", label: "Pharmacy" },
      { key: "medicine:doctor", label: "Doctor Consultation" },
    ],
  },
  {
    key: "sports",
    label: "Sports",
    children: [
      { key: "sports:coaching", label: "Coaching" },
      { key: "sports:gym", label: "Gym Training" },
    ],
  },
  {
    key: "administration",
    label: "Administration",
    children: [
      { key: "administration:coaching", label: "Coaching" },
      { key: "administration:training", label: "Administration Training" },
    ],
  },
];

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
      filterIcon: <ArrowDownNarrowWide color="#fff" />,
      filterDropdown: ({ setSelectedKeys, confirm }) => (
        <Dropdown
          menu={{
            items: categoryMenu,
            onClick: ({ key }) => {
              setSelectedKeys([key]); // store clicked category/subcategory
              confirm(); // trigger filtering
            },
          }}
          open
        />
      ),
      onFilter: (value, record) => {
        const [category, sub] = (value as string).split(":");
        if (sub) {
          return (
            record.commissionCategory.toLowerCase() ===
              category.replace("-", " ") &&
            record.subCategory?.toLowerCase() === sub
          );
        }
        return record.commissionCategory
          .toLowerCase()
          .includes((value as string).replace("-", " "));
      },
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
