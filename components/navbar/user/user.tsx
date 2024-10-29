import { nunitoSans } from '@/app/fonts/font'
import Image from 'next/image'
import React from 'react'

const User = () => {
  return (
    <div className=' flex flex-row items-center justify-center gap-x-3'>
        <Image src={'/avatar.svg'} alt='logo' width={44} height={44}/>
        <div className=' lg:flex hidden flex-col items-center justify-center gap-y-1'>
            <h4 className={`${nunitoSans.className} text-[14px] font-semibold`}>Nitin</h4>
            <h5 className={`${nunitoSans.className} text-[12px] text-[#565656] font-semibold`}>Admin</h5>
        </div>
        <div></div>
    </div>
  )
}

export default User