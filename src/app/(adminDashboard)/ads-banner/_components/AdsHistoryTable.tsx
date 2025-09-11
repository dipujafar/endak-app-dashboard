"use client";
import { Input, message, Popconfirm, PopconfirmProps, TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { Eye } from "lucide-react";
import UserDetails from "@/components/(adminDashboard)/modals/user/UserDetails";
import { CgUnblock } from "react-icons/cg";
import Image from "next/image";

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
  image: "/banner-image.png"
}));

const confirmBlock: PopconfirmProps["onConfirm"] = (e) => {
  console.log(e);
  message.success("Blocked the user");
};

const AdsHistoryTable = () => {
  const [open, setOpen] = useState(false);

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "Serial",
      dataIndex: "serial",
      render: (text) => <p>#{text}</p>,
    },
   
    {
      title: "Banner Image",
      dataIndex: "image",
      render: (image) => (
        <Image src={image} alt="banner-image" width={200} height={200} className="w-[200px] h-[80px]" />
      ),
    },

    {
      title: "Upload Date",
      dataIndex: "date",
    },

    {
      title: "Action",
      dataIndex: "action",
      render: () => (
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
      <div className="flex justify-between items-center   p-4">
        <p className="lg:text-xl text-lg line-clamp-1">ADS History</p>
        <Input.Search placeholder="Search here..." size="large" className="!w-[300px]" />
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

export default AdsHistoryTable;
