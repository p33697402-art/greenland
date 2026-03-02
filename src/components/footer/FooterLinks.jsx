import React from "react";

const FooterLinks = () => {
  return (
    <div className="flex flex-col justify-between mr-14 sm:flex-row gap-6">
      <div className="w-full md:w-[10%] p-5 rounded-xl">
        <h4 className="font-semibold text-black mb-3">Information</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="hover:text-gray-50 cursor-pointer">About</li>
          <li className="hover:text-gray-50 cursor-pointer">Product</li>
          <li className="hover:text-gray-50 cursor-pointer">Blog</li>
        </ul>
      </div>

      <div className="w-full md:w-[10%] p-5 rounded-xl">
        <h4 className="font-semibold text-black mb-3">Company</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="hover:text-gray-50 cursor-pointer">community</li>
          <li className="hover:text-gray-50 cursor-pointer">Career</li>
          <li className="hover:text-gray-50 cursor-pointer">Our story</li>
        </ul>
      </div>

      <div className="w-full md:w-[10%] p-5 rounded-xl">
        <h4 className="font-semibold text-black mb-3">Contact</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="hover:text-gray-50 cursor-pointer">Instagram</li>
          <li className="hover:text-gray-50 cursor-pointer">Facebook</li>
          <li className="hover:text-gray-50 cursor-pointer">Twitter</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
