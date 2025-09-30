"use client";;
import { Input, TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import UserDetails from "@/components/(adminDashboard)/modals/user/UserDetails";

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  email: string;

};

const data: TDataType[] = Array.from({ length: 20 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "Khalid Endak",
  email: "khalidendak@gmail.com",
  phoneNumber: "+9112655423",

}));



const GuestUserTable = () => {
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
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
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

export default GuestUserTable;
