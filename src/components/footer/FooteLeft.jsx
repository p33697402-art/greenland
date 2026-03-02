import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const FooterLeft = () => {
  return (
    <div className="w-full md:w-[15%] p-5 rounded-xl">
      <h3 className="text-lg mb-3 font-logo text-black">GREENLAND</h3>

      <p className="text-sm text-gray-800 mb-4">
        We help you find your dream plant
      </p>

      <div className="flex gap-4 text-xl text-gray-800">
        <FaInstagram className="cursor-pointer hover:text-pink-500 transition duration-300 hover:scale-110" />
        <FaFacebookF className="cursor-pointer hover:text-blue-500 transition duration-300 hover:scale-110" />
        <FaTwitter className="cursor-pointer hover:text-sky-400 transition duration-300 hover:scale-110" />
      </div>
    </div>
  );
};

export default FooterLeft;
