"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiFillCloseCircle,
} from "react-icons/ai";
import Image from "next/image";
import Logo from "../../../assets/images/logo/AL1.png"

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="bg-[#133e87] border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="flex self-center text-2xl font-bold whitespace-nowrap text-white ml-5">
              <Image
                alt="logo"
                className="-mt-2 -ml-4"
                src={Logo}
                width={50}
                height={50}
                priority
              />
              My Project
            </span>
          </Link>
          <button
            onClick={showMenu}
            aria-expanded={isMenuOpen}
            className="p-2 w-10 h-10 inline-flex items-center justify-center text-white rounded-lg md:hidden hover:bg-[#1f4f9c] focus:outline-none focus:ring-2 focus:ring-[#1f4f9c]"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                d="M1 1h15M1 7h15M1 13h15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>


          <div
            className={`${isMenuOpen ? "block" : "hidden"
              } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#1f4f9c] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#133e87]">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-white  hover:bg-blue-400 rounded md:bg-transparent md:text-white md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="block py-2 px-3 text-white rounded hover:bg-blue-400 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 text-white rounded  hover:bg-blue-400  md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 text-white rounded  hover:bg-blue-400  md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="block py-2 px-3 text-white rounded  hover:bg-blue-400  md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
                >
                  Cart
                </Link>
              </li>
              <li className="bg-white text-[#133e87] rounded-lg -mt-1 px-5 py-1 text-center">
                <Link
                  href="/login"
                  className="block py-2 px-3 rounded  hover:text-[#133e87] md:border-0 md:p-0"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
