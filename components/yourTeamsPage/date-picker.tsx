"use client";

import * as React from "react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { nunitoSans } from "@/app/fonts/font";
import Image from "next/image";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            `${nunitoSans.className} text-[14px] text-black font-semibold w-full lg:justify-start justify-center items-center text-left bg-white shadow-none border-none hover:bg-white `,
            !date && ""
          )}
        >
          {date ? (
            format(date, "PPP")
          ) : (
            <span
              className={`${nunitoSans.className} text-black text-[14px] font-semibold`}
            >
              Date
            </span>
          )}
          <Image
            src={"/dropdown.svg"}
            width={20}
            height={24}
            alt="arrow-down"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
