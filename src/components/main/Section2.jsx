import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export const Section2 = () => {
  return (
    <section className="w-full bg-[#aadcdc] flex justify-center py-16 mt-32">
      <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="flex justify-center flex-col items-center hover:scale-105 transform transition duration-300">
          <img src="/img/f1.png" alt="f1" className="w-[80%] block" />
          <h2 className="font-bold">Natural Plants</h2>
        </div>

        <div className="flex justify-center flex-col items-center hover:scale-105 transform transition duration-300">
          <img src="/img/frame2.png" alt="f2" className="w-[80%] block" />
          <h2 className="font-bold">Plant Accessories</h2>
          <p className="text-black-300 text-center">
            Horem ipsum dolor sit amet,<br />consectetur adipiscing elit.
          </p>
          <button className="flex items-center gap-3 bg-white text-black text-lg font-semibold rounded-xl py-4 px-10 mt-8 hover:bg-[#76caca] transition-all duration-300 active:scale-95">
            Buy Now
            <FaArrowRightLong size={22} />
          </button>
        </div>

        <div className="flex justify-center flex-col items-center hover:scale-105 transform transition duration-300">
          <img src="/img/frame3.png" alt="f3" className="w-[80%] block" />
          <h2 className="font-bold mt-2">Artificial Plants</h2>
        </div>
      </div>
    </section>
  );
};

export default Section2;