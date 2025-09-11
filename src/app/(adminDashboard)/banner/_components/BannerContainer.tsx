import React from "react";
import { AddBannerForm } from "./AddBannerForm/AddBannerForm";
import Image from "next/image";

export default function BannerContainer() {
  return (
    <div className="space-y-10">
      <AddBannerForm />

      {/* exiting Banner */}
      
      <div className="space-y-3">
        <h3 className="text-xl font-medium">Home Page Banner</h3>
        <Image
          src="/banner-image2.jpg"
          alt="banner-image"
          width={600}
          height={600}
          
        />
      </div>
    </div>
  );
}
