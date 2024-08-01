import { Square, Star } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toUpdateSelectedEmailData } from "../../redux/mailSlice";

const Messages = ({email}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const openMail = () => {
    navigate(`/mail/${email.id}`);
    dispatch(toUpdateSelectedEmailData(email))
  };


  return (
    <div
      className="flex gap-4 items-center justify-between border-b border-gray-200 px-4 text-sm hover:cursor-pointer hover:shadow-md py-3"
      onClick={openMail}
    >
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <Square className="text-[#707070]" size={"20px"} />
        </div>
        <div className="flex-none text-gray-300">
          <Star className="text-[#707070]" size={"20px"} />
        </div>
      </div>
      <div className="flex-1 w-1/2 md:w-[40dvw] lg:w-[48dvw] xl:w-[60dvw] mt-1">
        <p className="max-w-full text-gray-600 truncate inline-block ">
        {email?.message}
        </p>
      </div>
      <div className="flex-none text-gray-400 ">{new Date(email?.createdAt?.seconds*1000).toUTCString()}</div>
    </div>
  );
};

export default Messages;

