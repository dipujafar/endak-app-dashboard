import { Tabs, TabsProps } from "antd";
import Stat from "./Stat";
import SubscriptionEarningsTable from "./SubscriptionEarningsTable";
import CommissionEarningsTable from "./CommissionEarningsTable";


const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Subscription Earnings",
    children: <SubscriptionEarningsTable />,
  },
  {
    key: "2",
    label: "Commission Earnings",
    children: <CommissionEarningsTable   />,
  },
];

export default function EarningContainer() {
  return (
    <div className="space-y-3">
      <Stat />
       <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}
