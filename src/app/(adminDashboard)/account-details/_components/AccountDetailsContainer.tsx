import { Tabs, TabsProps } from "antd";
import CustomerTable from "./CustomerTable";
import VendorTable from "./VendorTable";
import GuestUserTable from "./GuestUserTable";
import InactiveUsersTable from "./InactiveUsersTable";

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
  {
    key: "3",
    label: "Guest Users",
    children: <GuestUserTable />,
  },
  {
    key: "4",
    label: "Inactive Users",
    children: <InactiveUsersTable />,
  },
];

export default function AccountDetailsContainer() {
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}
