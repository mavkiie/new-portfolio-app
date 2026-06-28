import React from "react";
import Link from "next/link";
import { Kapakana } from "next/font/google"; // using inter font, bold and regular weights
const kapakana = Kapakana({
    subsets:["latin"],
    weight: ["400", "400"],
  });

const NavBar = () => {
  return (
      <nav className="flex justify-between items-center p-4 font-bold border-b-3 border-[#6F6F5E] fade-in">
        <Link className={`${kapakana.className} hover:[-webkit-text-stroke:1px_#9B928F] hover:text-[#9B928F] transition-colors duration-20 text-[25px] font-bold [-webkit-text-stroke:1px_#5C4F4A]   pl-5`} href="/">MD</Link>
        <div className="w-64 mx-auto text-xl">
            <ul className="flex gap-6">
            <li>
                <Link className="hover:text-[#9B928F] hover:underline transition-colors duration-200" href="/about">about</Link>
            </li>
            <li>
                <Link className="hover:text-[#9B928F] hover:underline transition-colors duration-200" href="/projects">projects</Link>
            </li>
            <li>
                <Link className="hover:text-[#9B928F] hover:underline transition-colors duration-200" href="/extra">extra</Link>
            </li>
            <li>
                <Link className="hover:text-[#9B928F] hover:underline transition-colors duration-200" href="/contact">contact</Link>
            </li>
            </ul>
        </div>
      </nav>
  );
};

export default NavBar;
