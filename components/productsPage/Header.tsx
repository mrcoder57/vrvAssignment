import React from "react";

import { nunitoSans } from "@/app/fonts/font";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className=" flex flex-col w-full  ">
      <div className=" py-7 flex items-center lg:px-6 px-3 ">
        <h1
          className={`${nunitoSans.className} text-[28px] font-bold text-center `}
        >
          Products
        </h1>
      </div>
      <div className=" w-full mx-auto lg:px-6 px-3">
        <div className=" lg:w-full w-[95%] flex flex-col h-[340px] bg-[#4880FF] justify-center  rounded-xl ">
          <div className=" flex flex-col lg:px-[130px] px-[10px] gap-y-2 ">
            <p
              className={`${nunitoSans.className} text-white text-[16px] font-medium`}
            >
              September 12-22
            </p>
            <p
              className={`${nunitoSans.className} text-white lg:text-[37px] text-[20px] font-[800]`}
            >
              Enjoy free home <br />
              delivery in this summer
            </p>
            <p
              className={`${nunitoSans.className} text-white text-[16px] font-medium`}
            >
              Designer Dresses - Pick from trendy Designer Dress.
            </p>
          </div>
          <div className="  lg:px-[130px] px-[10px] pt-[30px]">
            <Button
              className={` flex items-center justify-center text-white text-[14px] font-medium bg-[#FF8743] w-[156px] h-[44px] ${nunitoSans.className} hover:bg-[#f0935d]`}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
