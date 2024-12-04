"use client"
import { nunitoSans } from '@/app/fonts/font'
import useAuthStore from '@/zustand/store';
import Image from 'next/image'
import React, { use } from 'react'

const User = () => {
  const { user } = useAuthStore();
  return (
    <div className=' flex flex-row items-center justify-center gap-x-3'>
        <Image src={'/avatar.svg'} alt='logo' width={35} height={35}/>  
        <div className=' lg:flex hidden flex-col items-center justify-center '>
            <h4 className={`${nunitoSans.className} text-[14px] font-semibold`}>{user?.fullName||'User'}</h4>
            <h5 className={`${nunitoSans.className} text-[12px] text-[#565656] font-semibold`}>{user?.role}</h5>
        </div>
        <div></div>
    </div>
  )
}

export default User