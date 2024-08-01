import {
  ChevronDown,
  Clock5,
  Inbox,
  PanelRightClose,
  Pencil,
  SendHorizonal,
  Star,
  StickyNote,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toUpdateOpenMailDialog } from "../../redux/mailSlice";

const Sidebar = () => {
  const dispatch=useDispatch()
  const sideItems = [
    {
      icon: <Inbox size={"20px"} />,
      label: "inbox",
    },
    {
      icon: <Star size={"20px"} />,
      label: "starred",
    },
    {
      icon: <Clock5 size={"20px"} />,
      label: "snoozed",
    },
    {
      icon: <PanelRightClose size={"20px"} />,
      label: "important",
    },
    {
      icon: <SendHorizonal size={"20px"} />,
      label: "sent",
    },
    {
      icon: <StickyNote size={"20px"} />,
      label: "drafts",
    },
    ,
    {
      icon: <ChevronDown size={"20px"} />,
      label: "more",
    },
  ];
  
  return (
    <div className="w-[15%]">
      {/* compose email */}
      <div className="p-3">
        <button
          className="flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]"
          onClick={() => dispatch(toUpdateOpenMailDialog(true))}
        >
          <Pencil size={"24px"} />
          Compose
        </button>
      </div>

      {/* list  */}

      <div className="text-gray-500">
        {sideItems?.map((item) => {
          return (
            <div
              className=" hover:bg-[#EAEBEF] flex pl-6 py-1 rounded-r-full items-center gap-4 my-2  hover:cursor-pointer"
              key={item.label}
            >
              <div>{item.icon}</div>
              <p className="capitalize">{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
