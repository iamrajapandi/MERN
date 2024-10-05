// import React from "react";
import img from "../assets/img/dog image...jpeg";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
// React
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
     <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col md:flex-row bg-gradient-to-r from-[#465959] to-[#dccaa8] text-black h-screen"
      >
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center w-full md:w-2/3 p-4">
          <h1 className="text-2xl font-extrabold text-center">Hi I'm Raja</h1>
          <div className="w-full my-4">
            <p className="p-4 text-xl text-center">
              Hello! I’m Raja, a final-year engineering student at
              [Your University]. With a passion for [your specific field or
              interest, e.g., mechanical engineering, software development,
              etc.], I am eager to apply my academic knowledge and hands-on
              skills to real-world challenges.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center space-x-7">
            <div className="flex justify-center items-center p-2 rounded-lg w-1/4 sm:w-1/6  hover:border-black hover:p-2 hover:scale-150 transition">
              <FaReact className="h-12 w-20 text-blue-300" />
            </div>
            <div className="flex justify-center items-center p-2 rounded-lg w-1/4 sm:w-1/6  hover:border-black hover:p-2 hover:scale-150 transition">
              <FaJava className="h-12 w-20 text-red-500" />
            </div>
            <div className="flex justify-center items-center p-2 rounded-lg w-1/4 sm:w-1/6 hover:border-black hover:p-2 hover:scale-150 transition">
              <SiMongodb className="h-12 w-20 text-green-400" />
            </div>
            <div className="flex justify-center items-center p-2 rounded-lg w-1/4 sm:w-1/6  hover:border-black hover:p-2 hover:scale-150 transition">
              <SiMysql className="h-12 w-20 text-blue-500" />
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex justify-center items-center w-full md:w-1/3 p-4">
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              times: [0, 0, 0.5, 1, 1],
            }}
          >
            <img
              src={img}
              alt="dog"
              className="rounded-full hover:animate-pulse w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
