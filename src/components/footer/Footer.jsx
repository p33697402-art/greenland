import React from "react";
import FooterLeft from "./FooteLeft";
import FooterLinks from "./FooterLinks";
import Me from "./Me";

const Footer = () => {
  return (
    <footer className="w-full bg-[#b1e7e7] text-white py-10">
      <div className="max-w-350.5 mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        <FooterLeft />
        <FooterLinks />
      </div>
      <div>
        <Me />
      </div>
    </footer>
  );
};

export default Footer;
