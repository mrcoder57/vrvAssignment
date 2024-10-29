import Analytics from "@/components/homepage/analytics";
import Chart from "@/components/homepage/charts/chart";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center bg-[#F5F6FA]">
      {/* Analytics section */}
      <div className="flex w-full justify-center">
        <div className="w-full "> {/* Limits max width and centers content */}
          <Analytics />
        </div>
      </div>

      {/* Chart section */}
      <div className="flex w-full h-full bg-[#F5F6FA] justify-center">
        <div className="w-full h-full bg-[#F5F6FA] lg:px-6 px-3"> {/* Adds padding and centers content */}
          <Chart />
        </div>
      </div>
    </div>
  );
}
