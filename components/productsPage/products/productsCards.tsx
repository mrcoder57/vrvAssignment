import React from 'react'
import Image from 'next/image'
import { nunitoSans } from '@/app/fonts/font'

import { Button } from '@/components/ui/button'
const ProductCards = () => {
  return (
    <div className=' flex flex-col lg:w-[340px] w-[300px]  h-[497px] bg-white rounded-lg'>
      <div className='flex items-center justify-center mt-0 pt-1'>
      <div className=' flex items-center justify-center mt-0 pt-0 h-[318px] w-[95%]  relative'>
        <Image src="/home.webp" alt="product" fill className=" rounded-t-md object-cover scale-100" />
      </div>
      </div>
      <div className=' flex flex-col  w-full px-6 py-6 gap-y-[5px]'>
        <h2 className={`${nunitoSans.className} text-[16px] font-semibold `}>Apple Watch</h2>
        <h2 className={`${nunitoSans.className} text-[14px] font-semibold text-[#4880FF] `}>$120.00</h2>
        <p className={`${nunitoSans.className} text-[14px] font-semibold `}>Rating: 4.5</p>
        <Button className={`bg-[#E2EAF8] h-[34px] w-[128px] hover:bg-[#5e8ed0] text-black text-[14px] rounded-md font-semibold mt-4 ${nunitoSans.className}`}>Edit Products</Button> 
      </div>
        
    </div>
  )
}

export default ProductCards