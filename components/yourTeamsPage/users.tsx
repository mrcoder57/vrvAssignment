"use client";
import { nunitoSans } from '@/app/fonts/font';
import React, { useState } from 'react';
import Filters from './filters';
import UsersTable from './userTables';
import SearchUsers from './searchUsers';

const Users = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State to manage search input
  const [filters, setFilters] = useState({}); // State to manage filters (if applicable)

  // Update search query based on user input
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex lg:flex-col flex-wrap w-full">
      <div className="py-6 flex items-center lg:px-6 px-3">
        <h1
          className={`${nunitoSans.className} text-[28px] font-bold text-center`}
        >
          Orders List
        </h1>
      </div>

      <div className="flex lg:flex-row flex-col-reverse lg:justify-between lg:items-center items-start justify-start w-full h-full bg-[#F5F6FA] gap-6 lg:px-6 px-3 pb-6">
        {/* Pass required filter state */}
        <Filters  />
        {/* Pass search handler */}
        <SearchUsers onSearch={handleSearch} />
      </div>

      <div className="flex items-start justify-around w-full h-full bg-[#F5F6FA] gap-6 lg:px-6 px-3">
        {/* Pass filtered data and search query */}
        <UsersTable searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Users;
