import { nunitoSans } from "@/app/fonts/font";
import Image from "next/image";
import React from "react";
import LanguageSwitcher from "./switch-languages/languageToggle";
import User from "./user/user";
import Notification from "./notification/notification";
import { SidebarTrigger } from "@/components/ui/sidebar";
const Navbar = () => {
  return (
    <div className=" w-full h-[70px] lg:px-6 px-3 bg-white flex justify-between items-center z-50">
      {/* Left section with menu button and search bar */}
      <div className="flex items-center gap-4">
        <SidebarTrigger />

        {/* Search bar */}
        <div className="lg:flex md:flex hidden items-center px-4 gap-2 w-[330px] h-[38px] rounded-full bg-[#D5D5D5]">
          <Image src="/search.svg" alt="search icon" width={15} height={15} />
          <input
            type="text"
            placeholder="Search"
            className={`w-full h-full bg-[#D5D5D5] rounded-full text-[#606060] text-sm focus:outline-none ${nunitoSans.className}`}
          />
        </div>
      </div>

      {/* Right section with notification, language switcher, and user icon */}
      <div className="flex items-center lg:gap-x-3 gap-x-1">
        <Notification />
        <LanguageSwitcher />
        <User />
      </div>
    </div>
  );
};

export default Navbar;
