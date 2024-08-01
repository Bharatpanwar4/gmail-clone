import { deleteDoc, doc } from "firebase/firestore";
import {
  Archive,
  ArchiveRestore,
  ChevronLeft,
  ChevronRight,
  EllipsisVertical,
  MailPlus,
  MessageSquareDot,
  MoveLeft,
  OctagonAlert,
  Trash2,
} from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { database } from "../../firebase";

const ActionIcons = () => {
  const { selectedMail } = useSelector((state) => state.mailSlice);

  const navigate = useNavigate();

  const params = useParams();
  const deleteMailById = async (id) => {
    try {
      await deleteDoc(doc(database,'emails',id))
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  const IconList = [
    {
      icon: <ArchiveRestore size={"20px"} />,
      fn: "restore",
    },
    {
      icon: <OctagonAlert size={"20px"} />,
      fn: "spam",
    },
    {
      icon: <Trash2 size={"20px"} />,
      fn: () => deleteMailById(params.id),
    },
    {
      icon: <MessageSquareDot size={"20px"} />,
      fn: "mark unread",
    },
    {
      icon: <MailPlus size={"20px"} />,
      fn: "move to",
    },
    {
      icon: <EllipsisVertical size={"20px"} />,
      fn: "more",
    },
  ];

  return (
    <div className="flex items-center justify-between">
      <div className="flex  items-center text-[#373737] gap-2 my-2">
        <div
          className="p-2 hover:bg-gray-200 hover:rounded-full hover:cursor-pointer mx-4 text-[#707070] hover:text-gray-700"
          onClick={() => navigate("/")}
        >
          <MoveLeft size={"20px"} />
        </div>
        {IconList?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={item.fn}
              className="p-2 hover:bg-gray-200 text-[#707070] hover:text-gray-700 hover:rounded-full hover:cursor-pointer"
            >
              {item.icon}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 mx-4">
        <button className="hover:rounded-full hover:bg-gray-100 text-[#707070] hover:text-gray-700">
          <ChevronLeft size={"20px"} className="cursor-pointer" />
        </button>

        <button className="hover:rounded-full hover:bg-gray-100 text-[#707070] hover:text-gray-700">
          <ChevronRight size={"20px"} className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default ActionIcons;
