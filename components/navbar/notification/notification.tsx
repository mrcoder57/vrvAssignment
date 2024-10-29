import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { nunitoSans } from "@/app/fonts/font";

const notifications = [
  {
    title: "Setting",
    description: "Update Dashboard",
    icon: "/setting-white.svg",
    gradient: "from-[#4E96FF] to-[#80C9FC]",
  },
 
  {
    title: "Event Update",
    description: "An event date update",
    icon: "/calendar.svg",
    gradient: "from-[#9E8FFF] to-[#EBCBFF]",
  },
  {
    title: "Profile",
    description: "Update Profile",
    icon: "/avatar-white.svg",
    gradient: "from-[#F97FD9] to-[#FFC1E6]",
  },
  {
    title: "Application Error",
    description: "Error occured",
    icon: "/notsign.svg",
    gradient: "from-[#FF8F8F] to-[#FFC1C1]",
  },
];

const Notification = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Image src="/notification-bell.svg" alt="notification bell" width={24} height={25} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[230px] h-[300px]">
        <DropdownMenuLabel className={`${nunitoSans.className} text-sm`}>
          Notifications
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.map((notification, index) => (
          <DropdownMenuItem key={index} className="h-[50px] mt-[3px] flex justify-between px-4 gap-x-2">
            <div className="flex flex-row gap-x-4 items-center justify-center">
              <div className={`w-10 h-10 bg-gradient-to-r ${notification.gradient} flex items-center justify-center rounded-full`}>
                <Image src={notification.icon} alt={notification.title} height={20} width={20} />
              </div>
              <div className="flex flex-col justify-start">
                <h4 className={`${nunitoSans.className} text-[14px] font-medium`}>{notification.title}</h4>
                <span className={`text-[#B5B5B5] text-[12px] ${nunitoSans.className}`}>{notification.description}</span>
              </div>
            </div>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <div className="flex items-center justify-center">
          <p className={`text-[#B5B5B5] mt-1 text-[14px] ${nunitoSans.className}`}>See All Notifications</p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notification;
