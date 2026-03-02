import React from "react";
import { RiPlantFill } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

export const Aboutsection = () => {
  return (
    <section className="w-full flex justify-center mt-20 px-4">
      <div className="max-w-300 w-full flex flex-wrap gap-8">
        <div className="w-full lg:w-[30%] flex items-center flex-col hover:scale-105 transform transition duration-300">
          <div className="w-24 h-24 rounded-full bg-[#a9c4c4] flex items-center justify-center hover:scale-105 transform transition duration-300">
            <RiPlantFill className="text-6xl text-black" />
          </div>
          <h2 className="font-bold">Large Assortment</h2>
          <p className="text-center text-gray-400">
            we offer many different types of products with fewer variations in
            each category.
          </p>
        </div>

        <div className="w-full lg:w-[30%] flex items-center flex-col hover:scale-105 transform transition duration-300">
          <div className="w-24 h-24 rounded-full bg-[#a9c4c4] flex items-center justify-center">
            <FaBoxOpen className="text-6xl text-black" />
          </div>
          <h2 className="font-bold">Fast & Free Shipping</h2>
          <p className="text-center text-gray-400">
            4-day or less delivery time, free shipping and an expedited delivery
            option.
          </p>
        </div>

        <div className="w-full lg:w-[30%] flex items-center flex-col hover:scale-105 transform transition duration-300">
          <div className="w-24 h-24 rounded-full bg-[#a9c4c4] flex items-center justify-center">
            <IoCall className="text-6xl text-black" />
          </div>
          <h2 className="font-bold">24/7 Support</h2>
          <p className="text-center text-gray-400">
            answers to any business related inquiry 24/7 and in real-time.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Aboutsection;
