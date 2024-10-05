import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="h-[95vh] w-screen flex justify-center items-center bg-gray-200">
      <div className="min-h-[50vh] flex flex-col gap-4 justify-center items-center px-4">
        {/* Name Block */}
        <div className="w-full max-w-[300px] border-2 shadow-lg rounded-md">
          <h1 className="h-full w-full font-extrabold font-serif text-xl sm:text-2xl flex justify-center items-center p-4">
            <FaUserCheck className="text-blue-600" />
            Raja Pandi R
          </h1>
        </div>
        {/* Email Block */}
        <div className="w-full max-w-[400px] border-2 shadow-lg rounded-md">
          <h1 className="h-full w-full flex font-extrabold font-serif text-xl sm:text-2xl justify-center items-center p-4">
            <IoMdMail className="text-red-500" />
            rajapandir456@gmail.com
          </h1>
        </div>
        <div className="flex flex-wrap gap-4 border-2 shadow-sm rounded-md p-4 w-[70%] max-w-[600px]">
          <div className="flex text-3xl justify-center items-center border-2 shadow-sm rounded-md p-4 flex-1 min-w-[120px]">
            <a href="https://github.com/iamrajapandi" target="_blank">
              <FaSquareGithub />
            </a>
          </div>
          <div className="flex text-3xl text-blue-500 justify-center items-center border-2 shadow-sm rounded-md p-4 flex-1 min-w-[120px]">
            <a href="https://www.linkedin.com/in/rajapandir/" target="_blank">
              <FaLinkedin />
            </a>
          </div>
          <div className="flex text-3xl text-red-500 justify-center items-center border-2 shadow-sm rounded-md p-4 flex-1 min-w-[120px]">
            <a
              href="tel:+234567890"
              target="_blank"
            >
              <IoMdCall />
            </a>
          </div>
          <div className="flex text-3xl text-red-900 justify-center items-center border-2 shadow-sm rounded-md p-4 flex-1 min-w-[120px]">
            <a href="mailto:rajapandir456@gmail.com" target="_blank">
              <IoIosMail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
