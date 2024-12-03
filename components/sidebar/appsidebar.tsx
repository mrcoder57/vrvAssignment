"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import { nunitoSans } from "@/app/fonts/font";
import { dashboardNavs } from "../icons/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";

export function AppSidebar() {
  const pathname = usePathname(); // Get current path
  const isTeams = pathname === "/teams";
  const isYourTeams = pathname === "/yourTeams";
  const isSettings = pathname === "/settings";
  const isLogin = pathname === "/login";
  if (isLogin) {
    return null}
  return (
    <Sidebar className="bg-white">
      <SidebarHeader className="h-[70px] flex items-center justify-center">
        <div className="flex items-center justify-center">
          <h1
            className={`text-[#4880FF] text-[20px] font-bold ${nunitoSans.className}`}
          >
            Dash<span className="text-black ml-[-2px]">B</span>
          </h1>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="mt-[20px]">
          <div className="flex flex-col w-full">
            {dashboardNavs.map((navItem) => {
              // Check if nav item link matches the current path
              const isActive = pathname === navItem.link;

              return (
                <Link href={navItem.link} key={navItem.name} passHref>
                  <Button
                    className={`text-[14px] w-full h-[50px] flex items-center font-semibold ${
                      isActive
                        ? "bg-[#4880ff] hover:bg-[#4880ff] text-white"
                        : "bg-white hover:bg-gray-100 text-black"
                    } shadow-none ${nunitoSans.className}`}
                  >
                    <div className="flex items-center w-full px-[20px] gap-4 justify-start">
                      <navItem.Icon stroke={isActive ? "#ffffff" : "#000000"} />
                      <span className="text-left">{navItem.name}</span>
                    </div>
                  </Button>
                </Link>
              );
            })}
          </div>
        </SidebarGroup>
        <Separator />
        <SidebarGroup className="">
          <div className="flex flex-col w-full">
            <Link href={"/teams"} key={"Teams"} passHref>
              <Button
                className={`text-[14px] w-full h-[50px] flex items-center font-semibold ${
                  isTeams
                    ? "bg-[#4880ff] hover:bg-[#4880ff] text-white"
                    : "bg-white hover:bg-gray-100 text-black"
                } shadow-none ${nunitoSans.className}`}
              >
                <div className="flex items-center w-full px-[20px] gap-4 justify-start">
                  {isTeams ? (
                    <Image
                      src="/avatar-outline-white.svg"
                      alt="team"
                      width={18}
                      height={18}
                    />
                  ) : (
                    <Image
                      src="/avatar-outline.svg"
                      alt="team"
                      width={18}
                      height={18}
                    />
                  )}
                  <span className="text-left">Teams</span>
                </div>
              </Button>
            </Link>
          </div>
          <div className="flex flex-col w-full">
            <Link href={"/yourTeams"} key={"Teams"} passHref>
              <Button
                className={`text-[14px] w-full h-[50px] flex items-center font-semibold ${
                  isYourTeams
                    ? "bg-[#4880ff] hover:bg-[#4880ff] text-white"
                    : "bg-white hover:bg-gray-100 text-black"
                } shadow-none ${nunitoSans.className}`}
              >
                <div className="flex items-center w-full px-[20px] gap-4 justify-start">
                  {isYourTeams ? (
                    <Image
                      src="/avatar-outline-white.svg"
                      alt="team"
                      width={18}
                      height={18}
                    />
                  ) : (
                    <Image
                      src="/avatar-outline.svg"
                      alt="team"
                      width={18}
                      height={18}
                    />
                  )}
                  <span className="text-left">Users Controls</span>
                </div>
              </Button>
            </Link>
          </div>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex flex-col w-full">
          <Link href={"/settings"} key={"Settings"} passHref>
        <Button
                className={`text-[14px] w-full h-[50px] flex items-center font-semibold ${
                  isSettings
                    ? "bg-[#4880ff] hover:bg-[#4880ff] text-white"
                    : "bg-white hover:bg-gray-100 text-black"
                } shadow-none ${nunitoSans.className}`}
              >
            <div className="flex items-center w-full px-[20px] gap-4 justify-start">
              {isSettings ? (
                <Image
                  src="/settings-white.svg"
                  alt="Setting"
                  width={18}
                  height={18}
                />
              ) : (
                <Image
                  src="/setting.svg"
                  alt="Setting"
                  width={26}
                  height={26}
                />
              )}
            
              <span>Setting</span>
            </div>
          </Button>
          </Link>
          <Button
            className={`text-[14px] w-full h-[50px] flex items-center font-semibold shadow-none bg-white hover:bg-gray-100 text-black ${nunitoSans.className}`}
          >
            <div className="flex items-center w-full px-[20px] gap-4 justify-start">
              <Image
                src="/logout.svg"
                alt="Logout"
                width={18}
                height={18}
                className="ml-1"
              />
              <span>Logout</span>
            </div>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
