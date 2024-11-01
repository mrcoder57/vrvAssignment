import Teams from "@/components/TeamsPage/teams";
import React from "react";

const MemberPage = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#F5F6FA]">
      {" "}
      {/* Set h-screen to take full height */}
      {/* Header section */}
      <div className="flex w-full justify-center">
        <div className="w-full mx-auto">
          {" "}
          {/* Centered with max-width */}
          <Teams />
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
