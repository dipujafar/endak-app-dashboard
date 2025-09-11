"use client";;
import { Input, TableProps } from "antd";
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
};

const data: TDataType[] = Array.from({ length: 20 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "Mr. Khalid Endak",
  email: "endakkhalid@gmail.com",
  type: "Vendor",
  date: "11 Sep, 2025",
  subscriptionType: inx % 2 === 0 ? "Yearly" : "Monthly",
  amount: "$475.00",
}));


const SubscriptionEarningsTable = () => {

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
      title: "Account Type",
      dataIndex: "type",
    },

    {
      title: "Subscription Type",
      dataIndex: "subscriptionType",
      align: "center",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: " Purchase Date",
      dataIndex: "date",
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

export default SubscriptionEarningsTable;
