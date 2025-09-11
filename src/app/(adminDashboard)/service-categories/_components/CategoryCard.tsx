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
    <Card className="p-4 flex flex-col items-center justify-center  space-y-5 hover:shadow-md transition-shadow border-[#BBBBBB]">
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
    </Card>
  );
}
