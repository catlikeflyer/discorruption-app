import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavItem = ({ pointsTo, text }) => (
  <div className="cursor-pointer md:mx-4 md:my-2 font-title hover:underline hover:text-xl hover:transition-all">
    <Link
      activeClass="active-link"
      to={pointsTo}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {text}
    </Link>
  </div>
);

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const navItemsList = ["Inicio", "Denuncia", "Sopla", "Soporte"];

  return (
    <div>
      <nav className="fixed w-full md:flex justify-between p-4 z-50 bg-black h-16">
        <div className="hidden md:flex flex-col md:flex-row md:items-end text-white mr-10 justify-start md:justify-end">
          <h1 className="font-title text-2xl">Metawhistle</h1>
        </div>
        <div className="hidden md:flex flex-col md:flex-row md:items-end text-white mr-10 justify-between md:justify-end">
          {navItemsList.map((item) => (
            <NavItem pointsTo={item.toLowerCase()} text={item} />
          ))}
        </div>
        <div className="flex flex-row md:hidden justify-between items-start">
          <h1 className="font-title text-2xl md:mx-4 md:my-2 text-white">
            Metawhistle
          </h1>
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer hover:text-3xl"
            onClick={() => setToggle(true)}
          />
        </div>
        {toggle && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white 
          transition-all animate-slide-in duration-150"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggle(false)} />
            </li>
            {navItemsList.map((item) => (
              <li className="my-2 mx-4">
                <NavItem pointsTo={`${item.toLowerCase()}`} text={item} />
              </li>
            ))}
          </ul>
        )}
      </nav>
      <div className="h-16"></div>
    </div>
  );
}
