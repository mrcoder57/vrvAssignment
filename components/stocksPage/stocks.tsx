import { nunitoSans } from '@/app/fonts/font'
import React from 'react'
import StocksTables from './stocksTable'

const Stocks = () => {
  return (
    <div className=" flex lg:flex-col flex-wrap w-full  ">
    <div className=" py-6 flex items-center lg:px-6 px-3 ">
      <h1
        className={`${nunitoSans.className} text-[28px] font-bold text-center `}
      >
        Product Stock
      </h1>
    </div>
    <div className="flex  items-start justify-around w-full h-full bg-[#F5F6FA] gap-6 lg:px-6 px-3 ">
      {/* Ensuring the cards are spread out */}
      <StocksTables/>
    </div>
    </div>
  )
}

export default Stocks