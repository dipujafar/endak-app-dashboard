import { Button } from "@/components/ui/button";
import { Avatar, Modal, Radio } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const ReportDetailsModal = ({ open, setOpen }: TPropsType) => {
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
        borderRadius: "10px",
      }}
    >
      <div className="pb-5">
        <div className="flex justify-between items-center  ">
          <div></div>
          <div
            className="w-10 h-10 bg-[#F6BEBF]  rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <RiCloseLargeLine size={18} color="#E12728" className="" />
          </div>
        </div>

        {/* --------------------- user details information ---------------------------- */}
        <div className="w-fit mx-auto ">
          <Avatar src="/user_image.png" size={150} />
        </div>

        <div className="mt-10">
          <div className="flex justify-between bg-[#ECF2F0]  py-3 px-2">
            <h4>Reported By :</h4>
            <p className="font-medium">Khalid Endak</p>
          </div>
          <div className="flex justify-between bg-[#ECF2F0]  py-3 px-2">
            <h4>Email :</h4>
            <p className="font-medium">khalidendak@.com</p>
          </div>
          <div className="flex justify-between   py-3 px-2">
            <h4>Reported To :</h4>
            <p className="font-medium">Mehedi Hasan</p>
          </div>
          <div className="flex justify-between   py-3 px-2">
            <h4>Email :</h4>
            <p className="font-medium">medediislam@gmail.com</p>
          </div>
          <div className="flex justify-between gap-x-4   py-3 px-2 bg-[#ECF2F0]">
            <h4>Additional Comments :</h4>
            <p className="font-medium max-w-[320px] ">
              Commitments were made but not fulfilled as per agreement.
            </p>
          </div>
          <div className="flex justify-between   py-3 px-2">
            <h4>Date :</h4>
            <p className="font-medium">11 OCt, 2025</p>
          </div>
          <div className="flex justify-between bg-[#ECF2F0]  py-3 px-2">
            <h4>Status :</h4>
            <div>
              <Radio.Group
                name="status"
                defaultValue={1}
                options={[
                  { value: 1, label: "Resolved" },
                  { value: 2, label: "Block User" },
                ]}
              />
            </div>
          </div>
          <Button className="w-full mt-4 border text-main-color border-main-color hover:bg-slate-200 bg-transparent">
            Submit
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ReportDetailsModal;
