"use client";
import { message, Popconfirm, PopconfirmProps, TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { ArrowDownWideNarrowIcon, Eye } from "lucide-react";
import UserDetails from "@/components/(adminDashboard)/modals/user/UserDetails";
import { cn } from "@/lib/utils";
import { CgUnblock } from "react-icons/cg";

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  email: string;
  date: string;
  reportedBy: string;
  reason: string;
  comments: string;
};

const data: TDataType[] = Array.from({ length: 5 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "Khalid Endak",
  reportedBy: "Mehedi Islam",
  reason: "No longer wants to communicate",
  comments: "Commitments were made but not fulfilled as per agreement.",
  email: "khalidendak@gmail.com",

  date: "11 Sep, 2025",
}));

const confirmBlock: PopconfirmProps["onConfirm"] = (e) => {
  console.log(e);
  message.success("Blocked the user");
};

const ReportTable = () => {
  const [open, setOpen] = useState(false);
  const [userType, setUserType] = useState("User");

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Serial",
      dataIndex: "serial",
      render: (text) => <p>#{text}</p>,
    },
    {
      title: "Reported By",
      dataIndex: "name",
    },
    {
      title: "Reported To",
      dataIndex: "reportedBy",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Report for reason",
      dataIndex: "reason",
      render: (text) => <p className="max-w-[140px] text-center">{text}</p>,
    },
    {
      title: "Additional Comments",
      dataIndex: "comments",
      render: (text) => <p className="max-w-[180px] text-center">{text}</p>,
    },

    {
      title: "Date",
      dataIndex: "date",
    },

    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <div className="flex items-center gap-x-1">
          <Eye
            size={22}
            color="var(--color-primary-gray)"
            onClick={() => setOpen(true)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-section-bg rounded-3xl">
      <h1 className="text-[#000000] text-2xl font-semibold py-3 px-2">
        Reporting List
      </h1>
      <DataTable columns={columns} data={data}></DataTable>
      <UserDetails
        open={open}
        setOpen={setOpen}
        userType={userType}
      ></UserDetails>
    </div>
  );
};

export default ReportTable;
