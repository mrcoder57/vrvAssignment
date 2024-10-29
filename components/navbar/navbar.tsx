import { nunitoSans } from '@/app/fonts/font'
import Image from 'next/image'
import React from 'react'
import LanguageSwitcher from './switch-languages/languageToggle'
import User from './user/user'

const Navbar = () => {
  return (
    <div className=" w-full h-[70px] px-6 bg-white flex justify-between items-center z-50">
  {/* Left section with menu button and search bar */}
  <div className="flex items-center gap-4">
    <button>
      <Image src="/menu.svg" alt="menu icon" width={24} height={25} />
    </button>
    
    {/* Search bar */}
    <div className="lg:flex md:flex hidden items-center px-4 gap-2 w-[330px] h-[38px] rounded-full bg-[#D5D5D5]">
      <Image src="/search.svg" alt="search icon" width={15} height={15} />
      <input
        type="text"
        placeholder="Search"
        className={`w-full h-full bg-[#D5D5D5] rounded-full text-[#606060] text-sm focus:outline-none ${nunitoSans.className}`}
      />
    </div>
  </div>

  {/* Right section with notification, language switcher, and user icon */}
  <div className="flex items-center lg:gap-6 gap-x-1">
    <Image src="/notification-bell.svg" alt="notification bell" width={24} height={25} />
    <LanguageSwitcher />
    <User />
  </div>
</div>

  )
}

export default Navbar