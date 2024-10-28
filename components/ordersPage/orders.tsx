import { nunitoSans } from '@/app/fonts/font'
import React from 'react'
import Tables from './tables'
import Filters from './filters'

const Orders = () => {
  return (
    <div className=" flex flex-col w-full  ">
    <div className=" py-6 flex items-center px-6 ">
      <h1
        className={`${nunitoSans.className} text-[28px] font-bold text-center `}
      >
        Orders List
      </h1>
    </div>
    <div className="flex justify-start w-full h-full bg-[#F5F6FA] gap-6 px-6 pb-6  ">
      {/* Ensuring the cards are spread out */}
      <Filters/>
    </div>
    <div className="flex  items-start justify-around w-full h-full bg-[#F5F6FA] gap-6 px-6 ">
      {/* Ensuring the cards are spread out */}
      <Tables/>
    </div>
    </div>
  )
}

export default Orders