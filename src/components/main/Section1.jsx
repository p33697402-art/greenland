import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export const Section1 = () => {
  return (
    <section className="w-full flex justify-center mt-20 px-4">
      <div className="max-w-337.5 w-full flex flex-wrap gap-8">

        <div className="w-full lg:w-[30%]">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Best Selling <br /> Plants
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Easiest way to healthy life by buying your favorite plants
          </p>

          <button className="flex items-center gap-3 bg-[#8cdcdc] text-black text-lg font-semibold rounded-xl py-4 px-10 mt-8 hover:bg-[#76caca] transition-all duration-300 active:scale-95">
            Buy Now
            <FaArrowRightLong size={22} />
          </button>
        </div>

        <div className="w-full lg:w-[65%] flex flex-wrap gap-6">
          <div className="w-full sm:w-[48%] lg:w-[31%] shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition duration-300">
            <img
              src="/img/Frame9.png"
              alt="Natural Plant"
              className="mx-auto w-full h-60 sm:h-64 lg:h-60 object-contain"
            />
            <h6 className="font-semibold text-lg mt-4">Natural Plant</h6>
            <p className="text-gray-600 mt-2">$1,400.00</p>
          </div>

          <div className="w-full sm:w-[48%] lg:w-[31%] shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition duration-300">
            <img
              src="/img/Frame8.png"
              alt="Artificial Plant"
              className="mx-auto w-full h-60 sm:h-64 lg:h-60 object-contain"
            />
            <h6 className="font-semibold text-lg mt-4">Artificial Plant</h6>
            <p className="text-gray-600 mt-2">$900.00</p>
          </div>

          <div className="w-full sm:w-[48%] lg:w-[31%] shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition duration-300">
            <img
              src="/img/Frame7.png"
              alt="Premium Plant"
              className="mx-auto w-full h-60 sm:h-64 lg:h-60 object-contain"
            />
            <h6 className="font-semibold text-lg mt-4">Premium Plant</h6>
            <p className="text-gray-600 mt-2">$3,500.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;