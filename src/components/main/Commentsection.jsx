import React from "react";
import { FaStar } from "react-icons/fa";

export const Commentsection = () => {
  return (
    <div className="w-full flex justify-center sm:px-8 md:px-[8%] lg:px-[10%] py-10">
      <div className="w-full flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-[#aadcdc] p-6 rounded-2xl shadow-md hover:scale-105 transition duration-300 transform">
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Emma Green"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-800 text-lg">
                Emma Green
              </h4>
              <div className="flex text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>

          <p className="mt-5 text-gray-700 text-base sm:text-lg leading-relaxed">
            “I absolutely love your plant collection! 🌿 The variety you have is
            amazing, from indoor plants to outdoor greenery. Browsing through
            your site makes me feel so inspired to add more life and freshness
            to my home. I also appreciate the care tips you provide – very
            helpful for both beginners and experienced plant lovers alike!”
          </p>
        </div>

        <div className="flex-1 bg-[#aadcdc] p-6 rounded-2xl hover:scale-105 transition duration-300 transform">
          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Liam Carter"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-800 text-lg">
                Liam Carter
              </h4>
              <div className="flex text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>

          <p className="mt-5 text-gray-700 text-base sm:text-lg leading-relaxed">
            “Your website is such a green paradise! 🌱 I’m really impressed by
            how well you showcase each plant with clear pictures and
            descriptions. It’s great to see a place that not only sells plants
            but also shares knowledge about taking care of them. Definitely
            bookmarking this site for my next plant shopping spree!”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Commentsection;
