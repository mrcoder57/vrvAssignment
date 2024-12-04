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
import { mockUserData } from "@/utils/constant";
import Image from "next/image";
import { Separator } from "../ui/separator";
import Badge from "./badges/badge";
import { UserEditDialog } from "./editUserModal/editUserModal";
import useAuthStore from "@/zustand/store";
import { toast } from "sonner";

interface UsersTableProps {
  searchQuery: string;
}

const UsersTable = ({ searchQuery }: UsersTableProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  // Access the user from the auth store
  const { user } = useAuthStore();

  // Filter users based on the search query
  const filteredUsers = mockUserData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = currentPage * itemsPerPage;
  const currentData = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  // Pagination Handlers
  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < filteredUsers.length)
      setCurrentPage(currentPage + 1);
  };

  // Handle Edit Action
  const handleEdit = (userId: string) => {
    if (!user) {
      toast.error("You must be logged in to perform this action.");
      return;
    }
    if (!user.permissions.edit) {
      toast.error("You do not have permission to edit users.");
      return;
    }

    // Open edit dialog
    console.log("Editing user:", userId);
  };

  return (
    <div className="relative rounded-lg w-full">
      <Table className="bg-white rounded-lg w-full">
        <TableHeader>
          <TableRow className="h-[49px]">
            <TableHead className="px-8 text-[14px] text-black font-semibold">
              Image
            </TableHead>
            <TableHead className="text-[14px] text-black font-semibold">
              Full Name
            </TableHead>
            <TableHead className="text-[14px] text-black font-semibold">
              Email
            </TableHead>
            <TableHead className="text-[14px] text-black font-semibold">
              Role
            </TableHead>
            <TableHead className="text-[14px] text-black font-semibold">
              Permissions
            </TableHead>
            <TableHead className="text-[14px] text-black font-semibold">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((row) => (
            <TableRow key={row.id} className="h-24">
              <TableCell className="font-medium px-8">
                <Image
                  src="/batman.svg"
                  alt="product"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-2">
                  {row.permissions.map((permission, index) => (
                    <Badge key={index} content={permission} />
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex h-8 w-28 rounded-md justify-between px-[9px] border border-[#979797] bg-[#FAFBFD]">
                  {/* Edit Button */}
                  {user && user.permissions.edit ? (
                    <UserEditDialog initialData={row} />
                  ) : (
                    <button onClick={() => handleEdit(row.id)}>
                      <Image
                        src="/edit.svg"
                        alt="Edit"
                        width={20}
                        height={20}
                        className="rounded-md"
                      />
                    </button>
                  )}

                  <Separator
                    orientation="vertical"
                    className="h-full bg-[#979797] w-[1px]"
                  />

                  {/* Delete Button */}
                  <button
                    onClick={() =>
                      toast.error("Delete functionality not implemented yet.")
                    }
                  >
                    <Image
                      src="/delete.svg"
                      alt="Delete"
                      width={20}
                      height={20}
                      className="rounded-md"
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
          disabled={(currentPage + 1) * itemsPerPage >= filteredUsers.length}
          className="px-4 py-2 bg-gray-200 text-black rounded-md disabled:opacity-50"
        >
          <Image src="/right.svg" alt="Next" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default UsersTable;
``
