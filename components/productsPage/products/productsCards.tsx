import React from 'react'
import Image from 'next/image'
import { nunitoSans } from '@/app/fonts/font'

import { Button } from '@/components/ui/button'
const ProductCards = () => {
  return (
    <div className=' flex flex-col w-[340px]  h-[497px] bg-white rounded-lg'>
      <div className=' flex items-center justify-center mt-0 pt-0 h-[318px] w-full relative'>
        <Image src="/apple-watch.png" alt="product" fill className=" rounded-lg object-contain" />
      </div>
      <div className=' flex flex-col  w-full px-6 py-6 gap-y-[5px]'>
        <h2 className={`${nunitoSans.className} text-[16px] font-semibold `}>Apple Watch</h2>
        <h2 className={`${nunitoSans.className} text-[14px] font-semibold text-[#4880FF] `}>$120.00</h2>
        <p className={`${nunitoSans.className} text-[14px] font-semibold `}>Rating: 4.5</p>
        <Button className={`bg-[#6091cc] h-[34px] w-[128px] hover:bg-[#5e8ed0] text-black text-[14px] rounded-lg font-semibold mt-4 ${nunitoSans.className}`}>Edit Products</Button> 
      </div>
        
    </div>
  )
}

export default ProductCards