// pages/index.js
import Header from "@/components/productsPage/Header";
import Products from "@/components/productsPage/products/products";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-[#F5F6FA]"> {/* Set h-screen to take full height */}
      {/* Header section */}
      <div className="flex w-full justify-center">
        <div className="w-full max-w-7xl mx-auto"> {/* Centered with max-width */}
          <Header />
        </div>
      </div>

      {/* Products section */}
      <div className=" flex w-full justify-center"> {/* Flex-grow to take remaining space */}
        <div className="w-full max-w-7xl h-full"> {/* Full height and max width */}
          <Products />
        </div>
      </div>
    </div>
  );
}
