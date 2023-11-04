"use client";
import { useState } from "react";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <nav className="bg-goodwill-blue p-4 fixed w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/Goodwill-Logo.png" alt="Logo" className="w-40 ml-4" />
        </div>
        <h1 className="hidden xl:inline-block text-white text-2xl font-semibold text-center italic">
          We believe in the power of work and opportunity for all
        </h1>
        <ul className="hidden md:flex space-x-5 ">
          <li>
            <a
              href="#"
              className=" text-white hover:text-gray-300 font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 font-semibold"
            >
              Chat
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 font-semibold"
            >
              Announcements
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 px-4 py-2 rounded-full border border-white font-semibold"
            >
              Login
            </a>
          </li>
        </ul>
        <span
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
          className=""
        >
          <Bars3Icon className="md:hidden text-white w-7 h-7 cursor-pointer" />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
