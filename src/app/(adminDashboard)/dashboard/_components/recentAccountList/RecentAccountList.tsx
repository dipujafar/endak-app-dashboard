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
  type: string;
  status: string;
};

const data: TDataType[] = Array.from({ length: 5 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "Khalid Endak",
  email: "khalidendak@gmail.com",
  phoneNumber: "+9112655423",
  type: inx % 2 === 0 ? "Vendor" : "User",
  date: "11 Sep, 2025",
  status: inx % 2 === 0 ? "Inactive" : "Active",
}));

const confirmBlock: PopconfirmProps["onConfirm"] = (e) => {
  console.log(e);
  message.success("Blocked the user");
};

const RecentAccountList = () => {
  const [open, setOpen] = useState(false);
  const [userType, setUserType] = useState("User");

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Serial",
      dataIndex: "serial",
      render: (text) => <p>#{text}</p>,
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <div className="flex items-center gap-x-1.5">
          <div
            className={cn(
              "size-2.5 rounded-full flex-shrink-0",
              record?.status === "Active" ? "bg-[#00BA00]" : "bg-[#E90C0C]"
            )}
          ></div>
          <p>{text}</p>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
    },

    {
      title: "Account Type",
      dataIndex: "type",

      filters: [
        {
          text: "User",
          value: "User",
        },
        {
          text: "Vendor",
          value: "Vendor",
        },
      ],
      filterIcon: () => (
        <ArrowDownWideNarrowIcon
          className="flex justify-start items-start"
          color="#fff"
        />
      ),
      onFilter: (value, record) => record.type.indexOf(value as string) === 0,
    },

    {
      title: "Registration Date",
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
            onClick={() => {
              setOpen(!open);
              setUserType(record?.type);
            }}
          />

          <Popconfirm
            title="Block the user"
            description="Are you sure to block this user?"
            onConfirm={confirmBlock}
            okText="Yes"
            cancelText="No"
          >
            <CgUnblock size={22} color="#CD0335" />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-section-bg rounded-3xl">
      <h1 className="text-[#000000] text-xl font-normal py-3 px-2">
        Recent Account List
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

export default RecentAccountList;
