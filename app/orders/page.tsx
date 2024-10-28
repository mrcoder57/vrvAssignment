
import Orders from '@/components/ordersPage/orders'
import React from 'react'

const OrdersPage = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#F5F6FA]"> {/* Set h-screen to take full height */}
    {/* Header section */}
    <div className="flex w-full justify-center">
      <div className="w-full mx-auto"> {/* Centered with max-width */}
        <Orders/>
      </div>
    </div>

    {/* Products section */}
    <div className=" flex w-full justify-center"> {/* Flex-grow to take remaining space */}
      <div className="w-full  h-full"> {/* Full height and max width */}
       
      </div>
    </div>
  </div>
  )
}

export default OrdersPage