"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import useFilterStore from "@/zustand/filterStore"; // Import the Zustand store

interface UserSearchProps {
  onSearch: (query: string) => void;
}

const UserSearch: React.FC<UserSearchProps> = ({ onSearch }) => {
  const { search, setSearch } = useFilterStore(); // Use Zustand store for search state

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearch(query); // Update the search query in the store
    onSearch(query); // Notify parent about the change (if needed)
  };

  // Use effect to sync with store's search state, in case it's updated elsewhere
  useEffect(() => {
    onSearch(search);
  }, [search, onSearch]);

  return (
    <div className="mb-4">
      <Input
        type="search"
        placeholder="Search users..."
        value={search}
        onChange={handleSearchChange}
        className="w-full h-[35px] mt-3 bg-white"
      />
    </div>
  );
};

export default UserSearch;
