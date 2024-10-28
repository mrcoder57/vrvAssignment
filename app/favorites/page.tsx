import Favorites from '@/components/FavoritesPage/favorites'
import Products from '@/components/productsPage/products/products'
import React from 'react'

const FavoritesPage = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#F5F6FA]"> {/* Set h-screen to take full height */}
    {/* Header section */}
    <div className="flex w-full justify-center">
      <div className="w-full mx-auto"> {/* Centered with max-width */}
        <Favorites/>
      </div>
    </div>

    {/* Products section */}
    <div className=" flex w-full justify-center"> {/* Flex-grow to take remaining space */}
      <div className="w-full  h-full"> {/* Full height and max width */}
        <Products />
      </div>
    </div>
  </div>
  )
}

export default FavoritesPage