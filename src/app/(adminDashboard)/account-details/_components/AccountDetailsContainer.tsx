import { Tabs, TabsProps } from "antd";
import CustomerTable from "./CustomerTable";
import VendorTable from "./VendorTable";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Customer",
    children: <CustomerTable />,
  },
  {
    key: "2",
    label: "Vendor",
    children: <VendorTable />,
  },
];

export default function AccountDetailsContainer() {
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}
