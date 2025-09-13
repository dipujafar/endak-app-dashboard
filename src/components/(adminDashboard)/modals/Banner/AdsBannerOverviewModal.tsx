import { ClickIcon, EyeIcon } from "@/icon";
import { Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";
import AdsOverViewChart from "./AdsOverViewChart";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const bannerStat = [
  {
    title: "Total Views",
    view: "3.5k",
    icon: <EyeIcon />,
  },
  {
    title: "Total Clicks",
    view: "500",
    icon: <ClickIcon />,
  },
];

const AdsBannerOverviewModal = ({ open, setOpen }: TPropsType) => {
  return (
    <Modal
      open={open}
      footer={null}
      centered={true}
      onCancel={() => setOpen(false)}
      closeIcon={false}
      style={{
        minWidth: "max-content",
        position: "relative",
        backgroundColor: "#000",
        borderRadius: "10px",
        background: "#F5F5F5",
      }}
    >
      <div className="pb-5 bg-[#F5F5F5]">
        <div className="flex justify-between items-center  ">
          <div></div>
          <div
            className="w-10 h-10 bg-[#F6BEBF]  rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <RiCloseLargeLine size={18} color="#E12728" className="" />
          </div>
        </div>

        {/* ------------------------- display stat of the ads banner ----------------------- */}
        <div className="flex justify-between gap-5">
          {bannerStat.map((item, index) => (
            <div
              key={index}
              className="flex  items-center mt-4 bg-[#FFFFFF] gap-x-5 py-4 px-3 rounded flex-1"
            >
              <div className="size-14 flex justify-center items-center bg-[#8243EE1A] rounded-full">
                <span className="text-white">{item?.icon}</span>
              </div>
              <div>
                <p className="text-[#A3AED0] font-medium">{item?.title}</p>
                <span className="text-[#2B3674] text-3xl font-medium">
                  {item.view}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/*  --------------------------- display chart overview --------------------------- */}
        <AdsOverViewChart className="mt-5" />
      </div>
    </Modal>
  );
};

export default AdsBannerOverviewModal;
