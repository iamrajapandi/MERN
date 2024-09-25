// import React from "react";
import img from "../assets/img/dog image...jpeg";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";


const Home = () => {
  return (
    <>
      <div className="h-[100%] w-[100%] flex flex-row bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="h-screen  w-[60%] border-1 border-black ">
          <div className="h-[70%] w-[100%] flex flex-col justify-center items-center ">
            <h1 className=" text-2xl font-extrabold">Hi I'm Raja</h1>
     
            <div className=" h-[10%] w-[100%]">
              <p className="p-4">
                Hello! I’m Raja, a final-year engineering student at
                [Your University]. With a passion for [your specific field or
                interest, e.g., mechanical engineering, software development,
                etc.], I am eager to apply my academic knowledge and hands-on
                skills to real-world challenges.
              </p>
            </div>
          </div>
          <div className="h-[1%] w-full flex flex-wrap justify-center items-start space-x-4">
  <div className="flex  justify-center items-center border-2 p-2 rounded-lg w-1/3 sm:w-1/4 md:w-1/6">
  <FaReact className="h-12 w-12 text-blue-300" />
  </div>
  <div className="flex justify-center items-center border-2 p-2 rounded-lg w-1/3 sm:w-1/4 md:w-1/6">
    <FaJava className="h-12 w-12 text-red-500" />
  </div>
  <div className="flex justify-center items-center border-2 p-2 rounded-lg w-1/3 sm:w-1/4 md:w-1/6">
  <SiMongodb className="h-12 w-12 text-green-300"/>
  </div>
  <div className="flex justify-center items-center border-2 p-2 rounded-lg w-1/3 sm:w-1/4 md:w-1/6">
  <SiMysql className="h-12 w-12 text-blue-400"/>
  </div>
</div>

        </div>
        <div className="h-screen w-[30%] border-1 border-black flex justify-center items-center rounded-lg ">
          <img
            src={img}
            alt="king"
            className="  w-30 rounded-full flex justify-center items-center  hover:animate-pulse"
          />
        </div>
      </div>
    </>
  );
};
export default Home;
