"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { nunitoSans } from "@/app/fonts/font";
import { TableData } from "@/utils/constant";
import Image from "next/image";
import { Separator } from "../ui/separator";

const StocksTables = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  const startIndex = currentPage * itemsPerPage;
  const currentData = TableData.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < TableData.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Rejected":
        return "bg-[#EF382680] text-[#EF3826]"; // 50% opacity for background, solid color for text
      case "Pending":
        return "bg-[#6226EF80] text-[#6226EF]";
      case "Paid":
        return "bg-[#00B69B80] text-[#00B69B]";
      case "Overdue":
        return "bg-[#FFA75680] text-[#FFA756]";
      default:
        return "";
    }
  };

  return (
    <div className="relative rounded-lg w-full">
      <Table className=" bg-white rounded-lg w-full">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className="h-[49px] ">
            <TableHead
              className={`${nunitoSans.className} text-[14px] text-black font-semibold flex items-center px-8`}
            >
              Image
            </TableHead>
            <TableHead
              className={`${nunitoSans.className} text-[14px] text-black font-semibold`}
            >
              Product Name
            </TableHead>
            <TableHead
              className={`${nunitoSans.className} text-[14px] text-black font-semibold`}
            >
              Category
            </TableHead>
            <TableHead
              className={`${nunitoSans.className} text-[14px] text-black font-semibold`}
            >
              Price
            </TableHead>
            <TableHead
              className={`${nunitoSans.className} text-[14px] text-black font-semibold`}
            >
              Piece
            </TableHead>
            <TableHead
              className={`${nunitoSans.className} text-[14px] text-black font-semibold`}
            >
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((row, index) => (
            <TableRow key={index} className=" h-24">
              <TableCell className="font-medium px-8">
                <Image
                  src={"/free.jpg"}
                  alt="product"
                  width={60}
                  height={60}
                  className=" rounded-md"
                />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>
                <div className=" flex  h-8 w-20 rounded-md justify-between px-[9px] border border-[#979797] bg-[#FAFBFD]">
                  <button>
                    <Image
                      src={"/edit.svg"}
                      alt="product"
                      width={20}
                      height={20}
                      className=" rounded-md"
                    />
                  </button>
                  <Separator orientation="vertical" className=" h-full bg-[#979797] w-[1px]" />
                  <button>
                    <Image
                      src={"/delete.svg"}
                      alt="product"
                      width={20}
                      height={20}
                      className=" rounded-md"
                    />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="flex justify-end mt-4 py-2">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          className="px-4 py-2 mr-2 bg-gray-200 text-black rounded-md disabled:opacity-50"
        >
          <Image src="/left.svg" alt="Previous" width={20} height={20} />
        </button>
        <button
          onClick={handleNext}
          disabled={(currentPage + 1) * itemsPerPage >= TableData.length}
          className="px-4 py-2 bg-gray-200 text-black rounded-md disabled:opacity-50"
        >
          <Image src="/right.svg" alt="Previous" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default StocksTables;
