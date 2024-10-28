import { nunitoSans } from '@/app/fonts/font'
import { time } from 'console'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'
interface analyticCardsProps {
  title: string
  image: string
  total: string
  Percentage: string
}

const Analyticcards:React.FC<analyticCardsProps> = ({title,image,total,Percentage}) => {
  return (
    <div className=' flex flex-col  w-[262px] h-[161px] justify-between rounded-lg bg-white py-4 px-4'>
        <div className=' flex flex-row  justify-between w-full'>
          <div>
          <h4 className={`text-[16px] font-[500] text-[#606060] ${nunitoSans.className}`}>{title}</h4>
          <h2 className={`text-[28px] mt-[16px] font-semibold text-[#202224] ${nunitoSans.className}`}>{total}</h2>
          </div>
          <div className=' flex relative items-center justify-center w-[60px] h-[60px] '>
          <Image src={image} alt='user' fill/>
          </div>
        </div>
       
        <div className=' flex items-center justify-center w-full'> 
          <h4 className={`text-[16px] font-[500] text-[#606060] ${nunitoSans.className}`}><span className=' text-[#00B69B]'>{Percentage}</span>  Up from yesterday</h4>
         
        </div>
    </div>
  )
}

export default Analyticcards