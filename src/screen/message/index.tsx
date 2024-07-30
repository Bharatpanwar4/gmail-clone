import { Square, Star } from "lucide-react";
import React from "react";

const Messages = () => {
  return (
    <div className="flex gap-4 items-center justify-between border-b border-gray-200 px-4 text-sm hover:cursor-pointer hover:shadow-md py-3">
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <Square className="text-[#707070]" size={"20px"} />
        </div>
        <div className="flex-none text-gray-300">
          <Star className="text-[#707070]" size={"20px"} />
        </div>
      </div>
      <div className="flex-1 w-1/2 lg:w-[70dvw] ">
        <p className="max-w-full text-gray-600 truncate inline-block ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga harum laboriosam a culpa! Tempora non quibusdam asperiores quasi laborum maiores aut odit quidem, omnis deleniti. Cumque, dicta impedit sint fuga pariatur quisquam nulla distinctio molestiae quidem excepturi id quis deserunt reiciendis laboriosam nostrum fugit debitis tempore culpa dolorum veritatis illum!
        </p>

      </div>
      <div className="flex-none text-gray-400 ">
12:00 
      </div>
    </div>
  );
};

export default Messages;
