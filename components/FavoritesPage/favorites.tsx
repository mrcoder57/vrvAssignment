import { nunitoSans } from '@/app/fonts/font'
import React from 'react'
import { Button } from '../ui/button'
import ProductsCards from '../productsPage/products/productsCards'

const Favorites = () => {
  return (
    <div className=" flex flex-col w-full  ">
    <div className=" py-6 flex items-center lg:px-6 px-3 ">
      <h1
        className={`${nunitoSans.className} text-[28px] font-bold text-center `}
      >
        Favorites
      </h1>
    </div>
    <div className="flex lg:flex-row flex-wrap items-start lg:justify-around w-full h-full bg-[#F5F6FA] gap-6 px-3  lg:px-6  ">
      {/* Ensuring the cards are spread out */}
      <ProductsCards />
      <ProductsCards />
      <ProductsCards />
    </div>
    </div>
  )
}

export default Favorites