import Image from 'next/image'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import { nunitoSans } from '@/app/fonts/font'

import Orderby from './permissions'
import OrderStatus from './roles'
import UserRoles from './roles'
import Permissions from './permissions'

export default function Component() {
  return (
    <div className="lg:w-full w-[240px] md:w-auto max-w-[730px] bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex flex-col sm:flex-row items-stretch">
        <div className="flex items-center justify-center p-4 sm:border-r border-gray-200">
          <Image src="/filter.svg" width={20} height={24} alt="filter" />
        </div>
        <div className="flex-1 lg:flex-row flex flex-col ">
          <FilterSection title="Filters By" />
          {/* <FilterSection>
            <DatePicker />
          </FilterSection> */}
          <FilterSection>
            <UserRoles />
          </FilterSection>
          <FilterSection>
            <Permissions />
          </FilterSection>
        </div>
        <div className="flex items-center justify-center p-4 sm:border-l border-gray-200">
          <button className="flex items-center justify-center gap-x-2 text-[#EA0234]">
            <Image src="/reset.svg" width={20} height={24} alt="reset" />
            <p className={`${nunitoSans.className} text-[14px] font-semibold`}>Reset Filter</p>
          </button>
        </div>
      </div>
    </div>
  )
}

function FilterSection({ children, title }: { children?: React.ReactNode; title?: string }) {
  return (
    <div className="flex-1 flex items-center justify-center p-4 border-t sm:border-t-0 sm:border-r border-gray-200">
      {title ? (
        <p className={`${nunitoSans.className} text-[14px] font-semibold`}>{title}</p>
      ) : (
        children
      )}
    </div>
  )
}