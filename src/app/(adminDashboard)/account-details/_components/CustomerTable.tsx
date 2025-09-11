"use client";
import { Input, message, Popconfirm, PopconfirmProps, TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { Eye } from "lucide-react";
import UserDetails from "@/components/(adminDashboard)/modals/user/UserDetails";
import { cn } from "@/lib/utils";
import { CgUnblock } from "react-icons/cg";

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  email: string;
  date: string;
  status: string;
};

const data: TDataType[] = Array.from({ length: 20 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "Khalid Endak",
  email: "khalidendak@gmail.com",
  phoneNumber: "+9112655423",
  date: "11 Sep, 2025",
  status: inx % 2 === 0 ? "Inactive" : "Active",
}));

const confirmBlock: PopconfirmProps["onConfirm"] = (e) => {
  console.log(e);
  message.success("Blocked the user");
};

const CustomerTable = () => {
  const [open, setOpen] = useState(false);

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
            onClick={() => setOpen(true)}
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
      <div className="max-w-[400px] ml-auto mb-2 pt-2">
        <Input.Search placeholder="Search here..." size="large" />
      </div>
      <DataTable columns={columns} data={data} pageSize={10}></DataTable>
      <UserDetails
        open={open}
        setOpen={setOpen}
        userType={"User"}
      ></UserDetails>
    </div>
  );
};

export default CustomerTable;
