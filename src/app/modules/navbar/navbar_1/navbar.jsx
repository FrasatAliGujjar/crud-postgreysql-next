"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import logo from "../../../assets/images/logo/AL1.png";
import Style from "./navbar.module.css"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-[#133e87] text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className={`flex text-2xl font-bold ${isOpen ? 'hidden' : ''} md:flex `}>
              <Image src={logo} width={50} alt="logo" className="mt-[-10px]" />
              My Project
            </div>
          </Link>

          {
        /* ===================== [ Search Bar ] ================== */}

          {/* <div className="middle-search ml-[-100px] border-1 border-solid border-red-500">
          <div className="relative flex">

            <input
              type="text"
              placeholder="Search Here . . ."
              className="w-[500px] py-1 pl-10 pr-4 rounded-[20px] border-1 border-solid border-gray-300 shadow-sm text-black  focus:outline-none"
            />

            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-[20px] h-[20px] absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              />
              </div>
              </div> */}

          {/* ====================================================== */}



          {/* ===================== [ Hamburger Menu ] ================== */}
          <div className="lg:hidden">
            <button
              className="focus:outline-none text-white hover:text-gray-300"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <div
            className={`lg:flex lg:items-center lg:gap-6 ${isOpen ? "block" : "hidden"
              } border-1 border-solid border-red-500`}
          >
            {/* ================================================================= */}

            <button className='border-1 border-solid border-blue-600 px-6 py-1 rounded-full text-center bg-white text-blue-600 hover:bg-red-500 hover:text-white'>
              <Link href="/login">
                <p>Logout</p>
              </Link>
            </button>

            {/* ================================================================= */}

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
