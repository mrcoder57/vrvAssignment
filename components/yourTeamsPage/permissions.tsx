"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { nunitoSans } from "@/app/fonts/font";
import Image from "next/image";
import { Button } from "../ui/button";
import useFilterStore from "@/zustand/filterStore";



const Permissions = () => {
  // Track multiple selected buttons in an array (local state for UI control)
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
  const { filters, setFilters } = useFilterStore(); // Use Zustand store to manage filters

  const buttons = ["Edit", "Delete", "View"];

  const toggleButtonSelection = (label: string) => {
    setSelectedButtons((prevSelected) =>
      prevSelected.includes(label)
        ? prevSelected.filter((item) => item !== label) // Remove if already selected
        : [...prevSelected, label] // Add if not selected
    );
  };

  const handleApplyFilters = () => {
    setFilters(selectedButtons); // Update the filters in the store
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex flex-row items-center gap-x-2 focus:outline-none">
        <p className={`${nunitoSans.className} text-[14px] font-semibold`}>Permissions</p>
        <Image src={"/dropdown.svg"} width={20} height={24} alt="arrow-down" />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="lg:w-[420px] w-[320px] lg:h-auto h-auto py-1 bg-white rounded-lg shadow-md flex flex-col gap-y-1">
        <DropdownMenuLabel className={`${nunitoSans.className} text-[14px] font-semibold`}>
          Filter using Permissions
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <div className="flex flex-wrap items-center justify-center gap-x-[13px] gap-y-[13px] pt-3 pb-1">
          {buttons.map((label, index) => (
            <Button
              key={index}
              onClick={() => toggleButtonSelection(label)}
              className={`w-[120px] h-[30px] rounded-[17px] shadow-none border hover:bg-white border-[#979797] ${
                selectedButtons.includes(label)
                  ? "bg-[#4880FF] text-white"
                  : "bg-white text-black"
              }`}
            >
              <p className={`${nunitoSans.className} text-[12px] font-medium`}>{label}</p>
            </Button>
          ))}
        </div>

        <DropdownMenuSeparator />

        <div className="flex items-center justify-center">
          <Button
            variant="outline"
            className="w-[120px] h-[34px] shadow-none bg-[#4880FF] text-white border border-[#979797]"
            onClick={handleApplyFilters} // Apply filters when clicked
          >
            <p className={`${nunitoSans.className} text-[12px] font-semibold`}>Apply Now</p>
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Permissions;
