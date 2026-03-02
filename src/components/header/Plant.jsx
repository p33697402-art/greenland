import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Plant = () => {
  return (
    <div className="w-full lg:w-1/2">

      <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
        Buy your <br /> dream plants
      </h3>

      <div className="flex gap-8 mt-6">
        <p className="text-lg sm:text-xl">
          50+ <br /> Plant species
        </p>
        <p className="text-lg sm:text-xl">
          100+ <br /> Customers
        </p>
      </div>

      <div className="w-full max-w-md mt-6 relative">
        <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={22} />
        <input
          type="text"
          placeholder="What are you looking for today?"
          className="w-full pl-10 p-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

    </div>
  );
};

export default Plant;