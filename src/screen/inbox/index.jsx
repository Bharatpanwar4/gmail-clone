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
import React, { useEffect, useState } from "react";
import Messages from "../message";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { database } from "../../firebase";
import { toUpdateAllEmailData } from "../../redux/mailSlice";

const Inboxx = () => {
  const [mailType, setMailType] = useState("primary");
  const { allEmails, searchedText } = useSelector((state) => state.mailSlice);
  const [duplicateEmail, setDuplicateEmail] = useState(allEmails);

  const dispatch = useDispatch();
  const MailTabs = [
    { icon: <Inbox size={"20px"} />, label: "primary" },
    { icon: <Tag size={"20px"} />, label: "promotions" },
    { icon: <Users size={"20px"} />, label: "social" },
  ];

  console.log("search", searchedText);

  useEffect(() => {
    const queryy = query(
      collection(database, "emails"),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(queryy, (snapshot) => {
      const allEmailsData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(toUpdateAllEmailData(allEmailsData));
    });
    // clean up

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const filteredEmail = allEmails?.filter((allEmail) => {
      return allEmail?.subject?.toLowerCase()?.includes(searchedText.toLowerCase()) || allEmail?.to?.toLowerCase()?.includes(searchedText.toLowerCase()) || allEmail?.message?.toLowerCase()?.includes(searchedText.toLowerCase())
    });
    setDuplicateEmail(filteredEmail)
  }, [searchedText, allEmails]);
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

          <button className="hover:rounded-full hover:bg-gray-100">
            <ChevronLeft size={"20px"} className="cursor-pointer" />
          </button>

          <button className="hover:rounded-full hover:bg-gray-100">
            <ChevronRight size={"20px"} className="cursor-pointer" />
          </button>
        </div>
      </div>

      {/* tabs */}
      <div className="h-[90dvh] overflow-y-auto">
        <div className="flex items-center gap-1">
          {MailTabs?.map((item) => {
            return (
              <button
                key={item.label}
                className={`flex text-sm font-medium items-center gap-5 p-4 w-52 hover:bg-gray-100 ${
                  mailType === item.label &&
                  "border-b-4  border-b-[#0B57D0] text-[#0B57D0] "
                }`}
                onClick={() => setMailType(item.label)}
              >
                {item.icon}
                <span className="capitalize">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* message */}

        {duplicateEmail && duplicateEmail?.map((email) => <Messages email={email} />)}
      </div>
    </div>
  );
};

export default Inboxx;
