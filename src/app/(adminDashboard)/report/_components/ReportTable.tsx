"use client";;
import { TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { Eye } from "lucide-react";
import ReportDetailsModal from "@/components/(adminDashboard)/modals/report/ReportDetailsModal";

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  email: string;
  date: string;
  reportedBy: string;
  reason: string;
  reportedEmail: string;
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
  reportedEmail: "medediislam@gmail.com",
  date: "11 Sep, 2025",
}));

const ReportTable = () => {
  const [open, setOpen] = useState(false);

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
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Reported To",
      dataIndex: "reportedBy",
    },
    {
      title: "Email",
      dataIndex: "reportedEmail",
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
      <ReportDetailsModal open={open} setOpen={setOpen}></ReportDetailsModal>
    </div>
  );
};

export default ReportTable;
