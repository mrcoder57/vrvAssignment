import React from "react";
import Analyticcards from "./analyticsCards";

import { nunitoSans } from "@/app/fonts/font";

const Analytics = () => {
  return (
    <div className=" flex flex-col w-full  ">
        <div className=" py-7 flex items-center lg:px-6 px-3 ">
            <h1 className={`${nunitoSans.className} text-[28px] font-bold text-center `}>Dashboard</h1>
        </div>
   
    <div className=" w-full flex lg:flex-row flex-wrap gap-y-3 justify-between lg:px-6 px-3  items-center">
        
      <Analyticcards
        image="/users.png"
        title="Total Users"
        total="40,689"
        Percentage="+10%"
      />
      <Analyticcards
        image="/order.png"
        title="Total Orders"
        total="10,029"
        Percentage="+10%"
      />
      <Analyticcards
        image="/sales.png"
        title="Total Sales"
        total="$ 89,000"
        Percentage="+10%"
      />
      <Analyticcards
        image="/pending.png"
        title="Total Pending"
        total="2,040"
        Percentage="+10%"
      />
    </div>
    </div>
  );
};

export default Analytics;
