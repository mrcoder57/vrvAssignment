import Users from '@/components/yourTeamsPage/users'
import React from 'react'

const yourTeamaPage = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#F5F6FA]"> {/* Set h-screen to take full height */}
    {/* Header section */}
    <div className="flex w-full justify-center">
      <div className="w-full mx-auto"> {/* Centered with max-width */}
        <Users/>
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

export default yourTeamaPage