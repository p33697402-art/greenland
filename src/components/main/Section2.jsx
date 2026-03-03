import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import f1 from "../../assets/img/f1.png";
import f2 from "../../assets/img/frame2.png";
import f3 from "../../assets/img/frame3.png";

export const Section2 = () => {
  const items = [
    { img: f1, title: "Natural Plants", desc: "" },
    {
      img: f2,
      title: "Plant Accessories",
      desc: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    { img: f3, title: "Artificial Plants", desc: "" },
  ];

  return (
    <section className="w-full bg-[#aadcdc] flex justify-center py-20">
      <div className="w-[90%] max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center h-full transition-all duration-300 hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.title}
              className={`w-[80%] mb-6 transition-all duration-300 ${
                i === 1 ? "-mt-6" : "mt-6"
              }`}
            />

            <h2 className="font-bold text-xl mb-3">{item.title}</h2>

            <p className="text-gray-700 mb-6 min-h-15 px-4">
              {item.desc}
            </p>

            {i === 1 && (
              <button className="flex items-center gap-3 bg-white text-black text-lg font-semibold rounded-xl py-3 px-8 hover:bg-[#76caca] transition-all duration-300 active:scale-95 shadow-md">
                Buy Now
                <FaArrowRightLong size={20} />
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;