"use client";;
import { Button, Input } from "antd";
import { useState } from "react";
import AdsBannerOverviewModal from "@/components/(adminDashboard)/modals/Banner/AdsBannerOverviewModal";
import { AdsBannerHistoryTable } from "./AdsBannerHistoryTable";
import { adsBannerData } from "./data";

type TDataType = {
  id: number;
  key?: number;
  serial: number;
  name: string;
  email: string;
  date: string;
  status: string;
  image: string;
  phoneNumber: string;
};



const AdsBannerHistoryTableContainer = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<TDataType[]>(adsBannerData);

  console.log(open);

  return (
    <>
    <Button onClick={() => setOpen(true)}>Open</Button>
      <div className="bg-section-bg rounded-3xl">
        <div className="flex justify-between items-center   p-4">
          <p className="lg:text-xl text-lg line-clamp-1">ADS History</p>
          <Input.Search
            placeholder="Search here..."
            size="large"
            className="!w-[300px]"
          />
        </div>
        <AdsBannerHistoryTable data={data} setOpen={setOpen} open={open} setData={setData}  />
      </div>
      <AdsBannerOverviewModal
        open={open}
        setOpen={setOpen}
      ></AdsBannerOverviewModal>
    </>
  );
};

export default AdsBannerHistoryTableContainer;
