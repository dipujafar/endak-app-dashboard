import { Avatar, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
  userType: string;
};

const UserDetails = ({ open, setOpen, userType }: TPropsType) => {
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
        <div className="w-fit mx-auto relative">
          <Avatar src="/user_image.png" size={150} />
          <div className="bg-green-600 absolute size-3 bottom-6 right-3 rounded-full border-2"></div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between bg-[#ECF2F0]  py-3 px-2">
            <h4>User name :</h4>
            <p className="font-medium">Khalid Endak</p>
          </div>
          <div className="flex justify-between   py-3 px-2">
            <h4>Email :</h4>
            <p className="font-medium">khalidendak@gmail.com</p>
          </div>
          <div className="flex justify-between bg-[#ECF2F0]  py-3 px-2">
            <h4>Contact Number :</h4>
            <p className="font-medium">+92121514321</p>
          </div>
          <div className="flex justify-between   py-3 px-2">
            <h4>Location :</h4>
            <p className="font-medium">Riyadh, Saudi</p>
          </div>
          <div className="flex justify-between bg-[#ECF2F0]  py-3 px-2">
            <h4>Account Type :</h4>
            <p className="font-medium">{userType}</p>
          </div>
          <div className="flex justify-between  py-3 px-2">
            <h4>Date of Join :</h4>
            <p className="font-medium">10 Jan, 2025</p>
          </div>
          {userType === "User" ? (
            <div className="flex justify-between bg-[#ECF2F0]  py-3 px-2">
              <h4>Service In Favorites :</h4>
              <p className="font-medium">45</p>
            </div>
          ) : (
            <div className="flex justify-between bg-[#ECF2F0]  py-3 px-2">
              <h4>Subscription Status :</h4>
              <p className="font-medium">Active</p>
            </div>
          )}

          {userType === "Vendor" && (
            <div className="flex justify-between  py-3 px-2">
              <h4>Expiry Date :</h4>
              <p className="font-medium">22 Dec, 2025</p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default UserDetails;
