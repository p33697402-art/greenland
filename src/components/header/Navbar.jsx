import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 text-gray-500 text-lg">
      <NavLink to="/" className={({ isActive }) =>
        isActive ? "font-bold text-black" : ""
      }>
        Home
      </NavLink>

      <NavLink to="/products" className={({ isActive }) =>
        isActive ? "font-bold text-black" : ""
      }>
        Products
      </NavLink>

      <NavLink to="/contacts" className={({ isActive }) =>
        isActive ? "font-bold text-black" : ""
      }>
        Contacts
      </NavLink>
    </div>
  );
};

export default Navbar;