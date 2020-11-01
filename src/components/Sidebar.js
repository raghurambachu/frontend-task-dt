import React from "react";
import { FcClock } from "react-icons/fc";

function Sidebar({ currentSlot }) {
  return (
    <div className="h-full col-span-3 px-8 md:border-r-2 md:col-span-1">
      <h3 className="mt-2 text-base font-semibold text-gray-500 md:mt-12 md:text-sm lg:text-lg ">
        Raghuram Bachu
      </h3>
      <p className="text-xl font-bold md:text-lg xl:text-2xl ">
        60 Minute Meeting
      </p>
      <div className="flex items-end ">
        <FcClock size={24} />
        <span className="ml-2 text-base font-semibold md:text-sm lg:text-lg ">
          1 hr
        </span>
      </div>
      {currentSlot && (
        <p className="mt-8 font-semibold md:text-sm lg:text-base xl:text-lg">
          Current Slot : {currentSlot}
        </p>
      )}
    </div>
  );
}

export default Sidebar;
