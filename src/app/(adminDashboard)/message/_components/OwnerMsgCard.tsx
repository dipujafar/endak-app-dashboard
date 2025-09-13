const OwnerMsgCard = ({ message }: { message: string }) => {
  return (
    <div className="max-w-max rounded-xl border bg-main-color text-white px-3 py-2">
      <p>{message}</p>
    </div>
  );
};

export default OwnerMsgCard;