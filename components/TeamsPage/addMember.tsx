import React from "react";
import Image from "next/image";
import { nunitoSans } from "@/app/fonts/font";

const AddMember = () => {
  return (
    <div className="relative rounded-md w-full bg-white flex flex-col items-center justify-center h-auto py-14 lg:px-[180px] md:px-10 px-9">
      <div className="flex items-center justify-center flex-col gap-y-2">
        <label className="flex items-center justify-center h-[80px] w-[80px] rounded-full bg-[#ECECEE] text-white cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            //   onChange={(e) => {
            //     const file = e.target.files[0];
            //     // Handle the file upload or preview here, e.g., by setting it to state
            //   }}
          />
          <Image src="/camera.svg" alt="Camera" width={40} height={40} />
        </label>

        <p
          className={`${nunitoSans.className} text-[14px] font-semibold text-[#4379EE]`}
        >
          Upload Photo
        </p>
      </div>

      <div className="lg:grid md:grid md:grid-cols-2 lg:justify-between flex flex-wrap items-center justify-center mx-auto gap-x-[60px] gap-y-10 mt-8 w-full ">
        {/* form section */}
        <div className="flex flex-col w-full items-center md:items-start">
          <label
            className={`${nunitoSans.className} text-[14px] text-[#606060] mb-1 text-left`}
          >
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            className={`${nunitoSans.className} text-[14px] h-12 border border-gray-300 rounded-[4px] p-2 lg:w-72 w-64 bg-[#F5F6FA] placeholder-[#606060] outline-none focus:ring-0`}
          />
        </div>

        <div className="flex flex-col w-full items-center md:items-start">
          <label
            className={`${nunitoSans.className} text-[14px] text-[#606060] mb-1`}
          >
            Last Name
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className={`${nunitoSans.className} text-[14px] h-12 border border-gray-300 rounded-[4px] p-2 lg:w-72 w-64 bg-[#F5F6FA] placeholder-[#606060] outline-none focus:ring-0`}
          />
        </div>

        <div className="flex flex-col w-full items-center md:items-start">
          <label
            className={`${nunitoSans.className} text-[14px] text-[#606060] mb-1`}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className={`${nunitoSans.className} text-[14px] h-12 border border-gray-300 rounded-[4px] p-2 lg:w-72 w-64 bg-[#F5F6FA] placeholder-[#606060] outline-none focus:ring-0`}
          />
        </div>

        <div className="flex flex-col w-full items-center md:items-start">
          <label
            className={`${nunitoSans.className} text-[14px] text-[#606060] mb-1`}
          >
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Phone Number"
            className={`${nunitoSans.className} text-[14px] h-12 border border-gray-300 rounded-[4px] p-2 lg:w-72 w-64 bg-[#F5F6FA] placeholder-[#606060] outline-none focus:ring-0`}
          />
        </div>

        <div className="flex flex-col w-full items-center md:items-start">
          <label
            className={`${nunitoSans.className} text-[14px] text-[#606060] mb-1`}
          >
            Position
          </label>
          <input
            type="text"
            placeholder="Position"
            className={`${nunitoSans.className} text-[14px] h-12 border border-gray-300 rounded-[4px] p-2 lg:w-72 w-64 bg-[#F5F6FA] placeholder-[#606060] outline-none focus:ring-0`}
          />
        </div>

        <div className="flex flex-col w-full items-center md:items-start">
          <label
            className={`${nunitoSans.className} text-[14px] text-[#606060] mb-1`}
          >
            Gender
          </label>
          <select
            className={`${nunitoSans.className} text-[14px] h-12 border border-gray-300 rounded-[4px] p-2 lg:w-72 w-64 bg-[#F5F6FA] text-[#606060] outline-none focus:ring-0`}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Button outside the form div */}
      <button className="mt-[60px] h-11 w-52 px-6 py-2 rounded-md bg-[#4379EE]  text-white font-semibold">
        <span className={`${nunitoSans.className} text-center text-[14px]`}>
          Add Member
        </span>
      </button>
    </div>
  );
};

export default AddMember;
