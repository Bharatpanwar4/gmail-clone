import { CircleHelp, Grip, Menu, Search, Settings } from "lucide-react";
import React from "react";
import Avatar from "./Avatar";
const Header = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      {" "}
      <div className="flex gap-3 items-center">
        <div className="flex p-3 hover:bg-gray-200 rounded-full cursor-pointer">
          <Menu size={"24px"} className="text-gray-500" />
        </div>
        <div className="flex items-center gap-3 text-2xl text-gray-500 font-medium">
          <img
            className="w-8"
            src={"https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"}
            alt="mailLOGO"
          />
          <p>Gmail</p>
        </div>
      </div>
      {/* search */}
      <div className="md:block hidden w-[50%]  ">
        <div className="bg-[#EAF1FB] flex items-center px-2 py-3 rounded-full">
          <Search size={"24px"} className="text-gray-700" />
          <input
            type="text"
            placeholder="Search Mail"
            className="rounded-full bg-transparent w-full outline-none px-1"
          />
        </div>
      </div>
      {/* side icons */}
      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CircleHelp size={"20px"} className="text-gray-500" />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <Settings size={"20px"} className="text-gray-500" />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <Grip size={"20px"} className="text-gray-500" />
          </div>

          <Avatar size={'small'}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
