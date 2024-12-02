import { nunitoSans } from '@/app/fonts/font'
import React from 'react'
interface BadgeProps {
  content: string
}
const Badge = ({ content }: BadgeProps) => {
  return (
    <div className=' flex items-center justify-center h-[30px] bg-lime-100 w-auto px-1 rounded-sm shadow-sm'>
        <p className={`${nunitoSans.className} text-xs text-black`}>{content}</p>
    </div>
  )
}

export default Badge