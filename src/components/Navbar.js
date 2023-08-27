import React, { useState } from "react";
import logo from "../assets/main-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = () => {
    setIsOpen(false); // Close the mobile menu when a link is clicked
  };

  const navList = ["Home", "Skills", "Projects", "Contact"];
  const listItems = navList.map((li) => (
    <li key={li} className="px-4 py-4">
      <Link
        activeClass="active"
        to={li}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="cursor-pointer hover:text-gray-300"
        onClick={handleLinkClick}
      >
        {li}
      </Link>
    </li>
  ));

  return (
    <nav className="sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <img src={logo} alt="main logo" className="h-12 w-12 ml-11"></img>
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <ul className="hidden md:flex text-lg mr-11">{listItems}</ul>
        </motion.div>
        <div
          onClick={handleClick}
          className="md:hidden z-10 cursor-pointer mr-7"
        >
          {!isOpen ? (
            <FaBars className="h-12" />
          ) : (
            <FaTimes className="text-white h-12" />
          )}
        </div>
        <motion.ul
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className={
            !isOpen
              ? "hidden"
              : "absolute md:hidden top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-4xl text-white"
          }
        >
          <img
            src={logo}
            alt="main logo"
            className="h-20 w-20 bg-white rounded-full mb-20"
          ></img>
          {listItems}
        </motion.ul>
      </div>
    </nav>
  );
}
