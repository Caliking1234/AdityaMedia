"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [menu, setmenu] = useState(false);
  return (
    <>
      <nav className=" w-full h-[100px] bg-[#EDD0B3] p-4 flex-row items-center justify-between hidden md:flex">
        <div className=" w-full flex flex-row items-center justify-start px-1">
          <Image
            src={"/images/adityaMediaLogoCopy.png"}
            alt="Aaditya Media"
            height={35}
            width={35}
          />
          <h1 className=" text-xl text-[#EE6223] font-semibold px-2">
            aaditya media.
          </h1>
        </div>
        <div className=" w-full flex flex-row justify-end gap-3">
          <Link
            href="/"
            className="p-1 text-[#EE6223] hover:text-white hover:font-bold transition-all duration-100"
          >
            home
          </Link>
          <Link
            href="/service&work"
            className="p-1 text-[#EE6223] hover:text-white hover:font-bold transition-all duration-100"
          >
            services
          </Link>
          <Link
            href="/clients"
            className="p-1 text-[#EE6223] hover:text-white hover:font-bold transition-all duration-100"
          >
            our clients
          </Link>
          <Link
            href="/contact"
            className="p-1 text-[#EE6223] hover:text-white hover:font-bold transition-all duration-100"
          >
            contact us
          </Link>
          <Link
            href="/astrology"
            className="p-1 text-[#EE6223] hover:text-white hover:font-bold transition-all duration-100"
          >
            astrology
          </Link>
        </div>
      </nav>
      <nav className=" w-full h-[100px] bg-[#EDD0B3] p-4 flex-row items-center justify-between flex md:hidden">
        <div className=" w-full flex flex-row items-center justify-between px-1">
          <div className="flex flex-row items-center justify-center px-1">
            <Image
              src={"/images/adityaMediaLogoCopy.png"}
              alt="Aaditya Media"
              height={35}
              width={35}
            />
            <h1 className=" text-xl text-[#EE6223] font-semibold px-2">
              aaditya media.
            </h1>
          </div>
          <div className=" text-[#EE6223]">
            <Menu
              onClick={() => {
                setmenu(!menu);
              }}
            />
          </div>
        </div>
        <div
          className={
            menu
              ? " w-full bg-[#EDD0B3] absolute top-[100px] h-screen left-0 transition-all duration-300 ease-in z-50 py-5"
              : " w-full bg-[#EDD0B3] absolute top-[100px] h-screen left-[-100vw] transition-all duration-300 ease-in z-50 py-5"
          }
        >
          <div className=" w-full flex flex-col justify-center items-center gap-3">
            <Link
              href="/"
              onClick={() => {
                setmenu(false);
              }}
              className="p-1 text-[#EE6223] hover:text-white hover:font-bold transition-all duration-100"
            >
              home
            </Link>
            <Link
              href="/service&work"
              onClick={() => {
                setmenu(false);
              }}
              className="p-1 text-[#EE6223] hover:text-white hover:font-bold transition-all duration-100"
            >
              services
            </Link>
            <Link
              href="/clients"
              onClick={() => {
                setmenu(false);
              }}
              className="p-1 text-[#EE6223] hover:text-white hover:font-bold transition-all duration-100"
            >
              our clients
            </Link>
            <Link
              href="/contact"
              onClick={() => {
                setmenu(false);
              }}
              className="p-1 text-[#EE6223] hover:text-white hover:font-bold transition-all duration-100"
            >
              contact us
            </Link>
            <Link
              href="/astrology"
              onClick={() => {
                setmenu(false);
              }}
              className="p-1 text-[#EE6223] hover:text-white hover:font-bold transition-all duration-100"
            >
              astrology
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
