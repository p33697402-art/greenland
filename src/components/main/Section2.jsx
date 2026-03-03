import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import f1 from "../../assets/img/f1.png";
import f2 from "../../assets/img/frame2.png";
import f3 from "../../assets/img/frame3.png";

export const Section2 = () => {
  const items = [
    { img: f1, title: "Natural Plants", desc: null },
    {
      img: f2,
      title: "Plant Accessories",
      desc: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    { img: f3, title: "Artificial Plants", desc: null },
  ];

  return (
    <section className="w-full bg-[#aadcdc] flex justify-center py-16 mt-32">
      <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex justify-center flex-col items-center hover:scale-105 transform transition duration-300"
          >
            <img src={item.img} alt={item.title} className="w-[80%] block" />
            <h2 className="font-bold">{item.title}</h2>
            {item.desc && (
              <p className="text-black-300 text-center">{item.desc}</p>
            )}
            <button className="flex items-center gap-3 bg-white text-black text-lg font-semibold rounded-xl py-4 px-10 mt-8 hover:bg-[#76caca] transition-all duration-300 active:scale-95">
              Buy Now
              <FaArrowRightLong size={22} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
