"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";

interface UserSearchProps {
  onSearch: (query: string) => void;
}

const UserSearch: React.FC<UserSearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Notify parent about the change
  };

  return (
    <div className="mb-4">
      <Input
        type="search"
        placeholder="Search users..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full h-[35px] mt-3 bg-white"
      />
    </div>
  );
};

export default UserSearch;
