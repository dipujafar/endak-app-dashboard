import { ClickIcon, ClickIcon2, EyeIcon, MoneyBagIcon } from "@/icon";
import Card from "antd/es/card/Card";
import Image from "next/image";
import React, { ReactNode } from "react";

type TCategory = {
  id: number;
  name: string;
  image: string;
  iconColor: string;
};

export default function CategoryCard({
  category,
  children,
}: {
  category: TCategory;
  children: ReactNode;
}) {
  return (
    <Card className="p-4  hover:shadow-md transition-shadow border-[#BBBBBB] relative">
      {/* icon and stat of the category */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-1 left-2 flex justify-between w-full"
      >
        <EyeIcon />
      </div>
      <div className="absolute top-1 right-2 flex gap-x-1">
        <div className="bg-[#8243EE] flex items-center gap-x-1 text-white px-1 rounded-md">
          <ClickIcon2 className="size-4" />
          <p>60%</p>
        </div>
        <div className="bg-[#8243EE] flex items-center gap-x-1 text-white px-1 rounded-md">
          <MoneyBagIcon className="size-4" />
          <p>50%</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center  gap-y-1 mt-3">
        <div className=" rounded-full  p-1 border border-main-color size-[100px] flex justify-center items-center mx-auto ">
          <Image
            src={category?.image}
            alt={category?.name}
            width={70}
            height={70}
            className="size-[50px] object-cover "
          />
        </div>

        <h3 className="text-lg font-medium text-gray-900 text-center">
          {category?.name}
        </h3>

        {children}
      </div>
    </Card>
  );
}
