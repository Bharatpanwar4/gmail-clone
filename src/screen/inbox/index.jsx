import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  EllipsisVertical,
  Inbox,
  RotateCcw,
  Square,
  Tag,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import Messages from "../message";

const Inboxx = () => {
const [mailType,setMailType]=useState('primary')
  const MailTabs = [
    { icon: <Inbox size={"20px"} />, label: "primary" },
    { icon: <Tag size={"20px"} />, label: "promotions" },
    { icon: <Users size={"20px"} />, label: "social" },
  ];

  

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1">
            <Square size={"20px"} className="cursor-pointer text-gray-700" />
            <ChevronDown size={"20px"} className="cursor-pointer" fill="#000" />
          </div>

          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <RotateCcw size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <EllipsisVertical size={"20px"} />
          </div>
        </div>



        <div className="flex items-center gap-2">
<p className="text-sm text-gray-500">1-50 of 10000</p>

<button>
<ChevronLeft size={"20px"} className="cursor-pointer"  />

</button>

<button>
<ChevronRight size={"20px"} className="cursor-pointer"  />

</button>
        </div>
      </div>

      {/* tabs */}
      <div className="h-[90dvh] overflow-y-auto">
        <div className="flex items-center gap-1">
          {MailTabs?.map((item) => {
            return (
              <button key={item.label} className={`flex text-sm font-medium items-center gap-5 p-4 w-52 hover:bg-gray-100 ${mailType === item.label && 'border-b-4  border-b-[#0B57D0] text-[#0B57D0] '}`} onClick={()=>setMailType(item.label)}>
                {item.icon}
                <span className="capitalize">{item.label}</span>
              </button>
            );
          })}
        </div>

     {/* message */}
     <Messages/>
      <Messages/>
     
      </div>

 

    </div>
  );
};

export default Inboxx;
