import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Paperclip, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import userImg from "@/assets/image/adminProfile.png";
import user2Img from "@/assets/image/user_image.png";
import user3Img from "@/assets/image/adminProfile.png";
import UserCard from "./UserCard";
import ReceiverMsgCard from "./ReceiverMsgCard";
import OwnerMsgCard from "./OwnerMsgCard";
import { UserSelectOption } from "./UserSelectOption";

const MessageContainer = () => {
  return (
    <div className="lg:mx-auto ">
      <div className="relative z-10 flex flex-col rounded-xl rounded-t-xl   px-10 py-8 lg:flex-row">
        {/* left */}
        <div className="border-opacity-[40%] pr-2 lg:w-[30%] lg:border-r-2 lg:border-gray-300 bg-white">
          <div className="mx-auto mb-10 mt-4 w-[95%]">
            {/*  ------------ here is option to select user type ------------------ */}
            <UserSelectOption />

            {/* users list - TODO: Use dynamic data */}
            <div className="scroll-hide mt-8 max-h-[100vh] space-y-8 overflow-auto">
              {Array.from({ length: 6 }).map((_, idx) => (
                <UserCard
                  key={idx}
                  user={{
                    img: user3Img,
                    name: "Mohammad Adeel",
                    latestMsg: "Thanks.",
                  }}
                  active={idx === 1 ? true : false}
                />
              ))}
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col justify-between lg:flex-grow lg:px-8 bg-white p-2">
          <div className=" flex items-center justify-between border-b border-opacity-[40%] pb-1 bg-main-color text-white rounded p-2">
            <div className="flex items-center gap-x-2 ">
              <div className="w-[20%]">
                <Image
                  src={userImg}
                  alt="user image"
                  className="aspect-square w-full rounded-full"
                />
              </div>

              <div className="lg:flex-grow">
                <h3 className="text-xl font-semibold ">Khalid Endak</h3>

                <div className="mt-1 flex items-center gap-x-2">
                  {/* Active/Online Indicator */}
                  <p className=" border-t-black">Active</p>
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                </div>
              </div>
            </div>

            {/* <button className="flex items-center gap-x-2">
              <CircleOff size={20} color="#d55758" />
              <p className="text-xl text-black">Block</p>
            </button> */}
          </div>

          <div className="max-h-full space-y-8 overflow-hidden pt-8">
            <div className="flex items-start gap-x-4">
              <Image
                src={userImg}
                alt="user's image"
                className="h-[50px] w-[50px] rounded-full"
              />
              <div className="max-w-[50%] space-y-3 overflow-hidden">
                <ReceiverMsgCard message={"Hi! Welcome to chat."} />
                <ReceiverMsgCard message={"Hi adeel, how are you ?"} />
              </div>
            </div>

            <div className="flex flex-row-reverse items-start gap-x-4">
              <Image
                src={user2Img}
                alt="user's image"
                className="h-[50px] w-[50px] rounded-full"
              />
              <div className="flex max-w-[50%] flex-col items-end space-y-3">
                <OwnerMsgCard message={"Hello!"} />
                <OwnerMsgCard message={"I am fine. What about you ?"} />
                <OwnerMsgCard
                  message={"I already took service from your app."}
                />
              </div>
            </div>

            <div className="flex items-start gap-x-4">
              <Image
                src={userImg}
                alt="user's image"
                className="h-[50px] w-[50px] rounded-full"
              />
              <div className="max-w-[50%] space-y-3">
                <ReceiverMsgCard message={"Oh! Nice. How was the service?"} />
                <ReceiverMsgCard message={"Is the Vendor behave well ?"} />
                <ReceiverMsgCard
                  message={
                    "omg, thi perspiciatis consectetur mollitia laboriosam itaque enim officia aut nemo quibusdam?"
                  }
                />
              </div>
            </div>

            <div className="flex flex-row-reverse items-start gap-x-4">
              <Image
                src={user2Img}
                alt="user's image"
                className="h-[50px] w-[50px] rounded-full"
              />
              <div className="flex max-w-[50%] flex-col items-end space-y-3">
                <OwnerMsgCard message={"Yeah, Vendor behavior was awesome"} />
                <OwnerMsgCard message={"Also, Vendor service was good"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
