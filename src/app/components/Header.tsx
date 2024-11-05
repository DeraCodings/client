"use client";

import { default as Link } from "next/link";
import React, { FunctionComponent, useState } from "react";

import { SlMenu } from "react-icons/sl";
import { MdClose } from "react-icons/md";
import { RiArrowDropRightFill, RiArrowDropDownFill } from "react-icons/ri";
import { IoSearchCircle } from "react-icons/io5";

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);

  function handleDropMenu() {
    setIsOpen(!isOpen);
  }

  function handleIsMenuOpen(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  // function handleIsResponsiveMenuOpen() {
  //   setIsMenuOpen(!isResponsiveMenuOpen);
  // }

  return (
    <div className="relative">
      <nav className=" flex justify-between px-5 md:justify-around items-center">
        <div>
          <Link href="/"><h1 className="font-bold text-2xl text-green-600">LOGO</h1></Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-6 justify-around">
            <li className="font-bold hover:underline hover:text-green-600 transition-all">
              <Link href="#">Contact Us</Link>
            </li>
            <li className="font-bold hover:underline hover:text-green-600 transition-all">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="font-bold hover:underline hover:text-green-600 transition-all">
              <Link href="/training-programs">Training programs</Link>
            </li>
            {/* <li className="hover:font-bold hover:underline hover:text-blue-700 transition-all">
              <Link href="#" onClick={handleDropMenu}>
                Resources
              </Link>
            </li> */}
          </ul>
        </div>
        {/* <div className="hidden md:flex gap-2 items-center">
          <button>Cart</button>
          <form className="flex items-center">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search products..."
              className=" border border-black rounded-lg pl-3 placeholder:text-sm placeholder:text-gray-500 w-10 focus:w-fit focus:placeholder:text-gray-600 transition-all focus:outline-none focus:border focus:border-white focus:border-b-blue-600"
            />
            <button
              type="submit"
              className="inline-block ml-2 bg-blue-500 text-white px-1 py-1 text-sm rounded-lg"
            >
              <IoSearchCircle size={25} color="white" />
            </button>
          </form>
        </div> */}
        <div className="md:hidden">
          <button onClick={handleIsMenuOpen}>
            {isMenuOpen ? <MdClose size={25} /> : <SlMenu size={25} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="py-8 pl-6 rounded-lg absolute w-full left-0 border top-10 bg-white text-black">
          <ul className="flex flex-col gap-8">
            <li className="hover:text-green-600 hover:underline font-bold">
              <Link href="#">Contact Us</Link>
            </li>
            <li className="hover:text-green-600 hover:underline font-bold">
              <Link href="#">Blog</Link>
            </li>
            <li className="hover:text-green-600 hover:underline font-bold">
              <Link href="/training-programs">Training programs</Link>
            </li>
            {/* <li className="hover:text-blue-200 hover:underline hover:font-bold">
              <Link
                href="#"
                onClick={() => setHidden(!hidden)}
              >
                Resources{" "}
                {hidden ? (
                  <RiArrowDropDownFill className="inline" size={25} />
                ) : (
                  <RiArrowDropRightFill className="inline" size={25} />
                )}
              </Link>
            </li>
            {hidden && (
              <div className="w-1/2 px-3 py-2 shadow-lg rounded-sm bg-white text-blue-700">
                <ul className="flex flex-col gap-3">
                  <li className="hover:text-gray-400 hover:underline hover:font-bold">
                    <Link href="#">Blog</Link>
                  </li>
                  <li className="hover:text-gray-400 hover:underline hover:font-bold">
                    <Link href="#">Case studies</Link>
                  </li>
                  <li className="hover:text-gray-400 hover:underline hover:font-bold">
                    <Link href="#">Reports</Link>
                  </li>
                </ul>
              </div>
            )}
            <li className="flex">
              <input type="text" placeholder="Search services..." />
              <button
                type="submit"
                className="inline-block ml-2 bg-blue-500 text-white px-1 py-1 text-sm rounded-lg"
              >
                <IoSearchCircle size={25} color="white" />
              </button>
            </li> */}
          </ul>
        </div>
      )}
      {isOpen && (
        <div className="absolute top-10 left-2/4 pr-5 border-2 border-gray-200 shadow-xl rounded-lg">
          <ul className="flex flex-col gap-5 py-5 pl-5">
            <li className="hover:font-bold hover:underline hover:text-blue-700">
              <Link href="#">Blog</Link>
            </li>
            <li className="hover:font-bold hover:underline hover:text-blue-700">
              <Link href="#">Case studies</Link>
            </li>
            <li className="hover:font-bold hover:underline hover:text-blue-700">
              <Link href="#">Reports</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

function Header() {
  return (
    <header className="py-3 px-1 md:px-3 sticky top-0 bg-white z-50">
      <NavBar />
    </header>
  );
}

export default Header;
