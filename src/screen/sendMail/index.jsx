import { X } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toUpdateOpenMailDialog } from "../../redux/mailSlice";
import { database } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMail = () => {
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const { openMailDialog } = useSelector((state) => state.mailSlice);
  const dispatch = useDispatch();

  const changeInputHandler = (e) => { 
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) =>  {
    e.preventDefault();
    await addDoc(collection(database,'emails'),{
      to:formData.to,
      subject:formData.subject,
      message:formData.message,
      createdAt:serverTimestamp()
    })

    dispatch(toUpdateOpenMailDialog(false))
setFormData({
  to: "",
  subject: "",
  message: "",
})
  };
  return (
    <div
      className={`bg-white max-w-6xl shadow-2xl rounded-t-md  h-fit ${openMailDialog ? "block" : "hidden"}`}
    >
      <div className="flex items-center justify-between bg-[#F2F6FC] p-1 px-3 rounded-t-md">
        <div className="text-sm font-semibold text-gray-600">New Message</div>
        <div
          className="p-2 hover:bg-gray-200 hover:rounded-full cursor-pointer"
          onClick={() => dispatch(toUpdateOpenMailDialog(false))}
        >
          <X size={"16px"} />
        </div>
      </div>

      <form onSubmit={submitForm} className="flex flex-col p-3 gap-2">
        <input
          onChange={changeInputHandler}
          type="text"
          name="to"
          value={formData.to}
          placeholder="To"
          className="outline-none py-1"
        />
        <input
          onChange={changeInputHandler}
          name="subject"
          value={formData.subject}
          type="text"
          placeholder="Subject"
          className="outline-none py-1"
        />
        <textarea
          onChange={changeInputHandler}
          name="message"
          value={formData.message}
          id=""
          cols="30"
          rows="10"
          className="outline-none py-1"
        ></textarea>
        <button
          type="submit"
          className="bg-[#0B57D0] rounded-full w-fit px-4 py-1 text-white font-medium"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMail;
