"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Style from "./navbar.module.css"
import logo from "../../../assets/images/logo/AL1.png";
import Image from 'next/image';

// ------------------------------------------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// ------------------------------------------------------


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#133e87] text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}

        <div className={`flex text-2xl font-bold ${isOpen ? 'hidden' : ''} md:flex `}>
          <Image src={logo} width={50} alt="logo" className="mt-[-8px]" />
          <Link href="/">Attendance Portal</Link>
        </div>

        {/* Hamburger Menu */}
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
            }`}
        >





          {/* <Link href="/dashboard" className="w-[100px] text-center block lg:inline-block px-3 py-2 rounded hover:bg-blue-500">Dashboard</Link>
          <Link href="/contact" className="w-[100px] text-center  block lg:inline-block px-3 py-2 rounded hover:bg-blue-500">Contact Us</Link>
          <Link href="/about" className="w-[100px] text-center  block lg:inline-block px-3 py-2 rounded hover:bg-blue-500">About Us</Link>
          <Link href="/login" className="w-[100px] text-center  block lg:inline-block px-3 py-2 rounded hover:bg-red-500">Logout</Link> */}





          {/* ======================================= */}
          {[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Attendance", href: "/attendance" },
            { label: "Contact", href: "/contact" },
            { label: "About", href: "/about" },
          ].map((item, index) => (
            <li style={{ listStyleType: 'none' }} key={index} className='md:hidden'>
              <Link href={item.href}>
                <button className="text-center m-[5px] lg:m-[0px] w-[100px] py-2 px-4 rounded-lg text-sm font-medium text-black bg-slate-100 hover:bg-blue-400 hover:text-white hover:font-bold focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  {item.label}
                </button>
              </Link>
            </li>
          ))}
          {/* ======================================= */}

          <li style={{ listStyleType: 'none' }} className='md:hidden' >
            <Link href="/login">
              <button className="text-center m-[5px] lg:m-[0px] w-[100px] py-2 px-4 rounded-lg text-sm font-medium text-black bg-slate-100 hover:bg-red-400 hover:text-white hover:font-bold focus:ring-2 focus:ring-blue-500 focus:outline-none">
                Logout
              </button>
            </Link>
          </li>

          {/* ======================================= */}

          {/* ======================================= */}

          <li style={{ listStyleType: 'none' }} className='hidden lg:block'  >
            <Link href="/login">
              <FontAwesomeIcon icon={faPowerOff} className="m-[5px] text-[25px] text-slate-100 hover:text-red-400" />
            </Link>
          </li>

          {/* ======================================= */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
