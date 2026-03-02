import React, { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Icons from "./Icons";
import Headercontent from "./Headercontent";
import { MdOutlineLegendToggle } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-350 flex justify-between items-center px-4 py-4">
          <div className="flex items-center gap-12">
            <Logo />
            <div className="hidden lg:block">
              <Navbar />
            </div>
          </div>

          <div className="hidden lg:block">
            <Icons />
          </div>

          <div
            className="lg:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MdOutlineLegendToggle />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col items-center gap-6 pb-6 lg:hidden">
          <Navbar />
          <Icons />
        </div>
      )}

      <Headercontent />
    </header>
  );
};

export default Header;
