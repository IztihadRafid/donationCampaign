import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) =>
          isActive ? 'text-[#FF444A] underline font-bold text-lg ' : 'text-black font-bold text-lg'
        }>Home</NavLink>
      </li>
      <li>
        <NavLink to="/donation" className={({ isActive }) =>
          isActive ? 'text-[#FF444A] underline font-bold text-lg' : 'text-black font-bold text-lg'
        }>Donation</NavLink>
      </li>
      <li>
        <NavLink to="/statistics" className={({ isActive }) =>
          isActive ? 'text-[#FF444A] underline font-bold text-lg' : 'text-black font-bold text-lg'
        }>Statistics</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 flex justify-between items-center max-w-7xl mx-auto">
      <div className="">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="">
          <img src="/image/Logo.png" alt="logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex justify-between">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Header;
