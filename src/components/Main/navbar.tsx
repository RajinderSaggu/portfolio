"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import MenuOverlay from "../menu-overlay";
import TabButton from "../tab-button";
import Button from "../button";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Experience",
    path: "#work",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* Logo Section */}
        <Link href={"/"} className="text-destructive-foreground">
        <h1 className="text-2xl font-bold from-neutral-700  font-mono antialiased  text-ellipsis bg-clip-text text-white">
        {"<>"} Rajinder.Saggu  {"</>"} 
        </h1>
        </Link>
    
        {/* Mobile Menu Button */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-white hover:text-white hover:border-white"
            >
              <FaBars className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-white hover:text-white hover:border-white"
            >
              <IoMdCloseCircleOutline className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Menu for Large Screens */}
        <div className="hidden md:flex md:w-auto items-center">
  <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 gap-2">
    {navLinks.map((link, index) => (
      <li key={index} className="relative group">
        <Link
          href={link.path}
          title={link.title}
          className="text-white hover:text-white transition duration-300 ease-in-out text-xl font-semibold"
        >
          {link.title}
        </Link>
        {/* Underline Animation */}
        <span className=" absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
      </li>
    ))}
  </ul>
  <Button text="Hire Me" variant="secondary" className="ml-4"
       href={"https://www.linkedin.com/in/rajinder-kaur-s-886398216/"}
target="_blank"
   />
</div>


      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
