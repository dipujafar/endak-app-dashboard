import { Tabs, TabsProps } from "antd";
import React from "react";
import CustomerAgreement from "./_components/CustomerAgreement";
import VendorAgreement from "./_components/VendorAgreement";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Customer",
    children: <CustomerAgreement />,
  },
  {
    key: "2",
    label: "Vendor",
    children: <VendorAgreement />,
  },
];

export default function AgreementPage() {
  return <Tabs defaultActiveKey="1" items={items} />;
}
