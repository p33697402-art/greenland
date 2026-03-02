import React from "react";
import { FiShoppingCart, FiMail, FiMoon, FiSun } from "react-icons/fi";

const Icons = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className="flex gap-6 items-center text-xl">
      <FiShoppingCart className="cursor-pointer" />
      <FiMail className="cursor-pointer" />

      {darkMode ? (
        <FiSun onClick={() => setDarkMode(false)} className="cursor-pointer" />
      ) : (
        <FiMoon onClick={() => setDarkMode(true)} className="cursor-pointer" />
      )}
    </div>
  );
};

export default Icons;