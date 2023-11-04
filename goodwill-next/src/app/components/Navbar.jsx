"use client";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

const Navbar = ({ mobile, setMobile }) => {
  const router = useRouter();
  return (
    <nav className="bg-goodwill-blue p-4 fixed w-screen top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/Goodwill-Logo.png" alt="Logo" className="w-40 ml-4" />
        </div>
        <h1 className="hidden xl:inline-block text-white text-2xl font-semibold text-center italic">
          We believe in the power of work and opportunity for all
        </h1>
        <ul className="hidden md:flex space-x-5 ">
          <button
            type="button"
            onClick={() => {
              router.push("/");
            }}
          >
            <li className="text-white hover:text-gray-300 font-semibold">
              Home
            </li>
          </button>
          <button
            type="button"
            onClick={() => {
              router.push("/chat");
            }}
          >
            <li className="text-white hover:text-gray-300 font-semibold">
              Chat
            </li>
          </button>
          <button
            type="button"
            onClick={() => {
              router.push("/announcements");
            }}
          >
            <li className="text-white hover:text-gray-300 font-semibold">
              Announcements
            </li>
          </button>
          <button
            type="button"
            onClick={() => {
              router.push("/login");
            }}
          >
            <li className="text-white hover:text-gray-300 px-4 py-2 rounded-full border border-white font-semibold">
              Login
            </li>
          </button>
        </ul>

        <Bars3Icon
          onClick={() => setMobile(!mobile)}
          className="md:hidden text-white w-7 h-7 cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
