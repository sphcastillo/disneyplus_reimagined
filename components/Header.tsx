import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";
import { MdOutlineMoreVert } from "react-icons/md";
import disneyPlusLogo from "@/images/disneyPluslogo.png";
import NavigationLinks from "./NavigationLinks";
import { FaPlus, FaStar } from "react-icons/fa";
import { PiFilmReelFill } from "react-icons/pi";
import { TbDeviceTvOldFilled } from "react-icons/tb";
import { Ramabhadra } from "next/font/google";

const ramabhadra = Ramabhadra({ weight: "400", subsets: ["latin"] });

function Header() {
  return (
    <header className="fixed flex items-center justify-around p-3 top-0 z-50 w-full bg-gradient-to-b from-[#14143C] to-[#141450]">
      <div className="flex items-center space-x-1 md:space-x-7">
        <Link href="/" className="mr-2 sm:mr-0">
          <Image
            src={disneyPlusLogo}
            alt="Disney+ logo"
            width={100}
            className="cursor-pointer"
          />
        </Link>
        <div className="hidden sm:block">
          <NavigationLinks />
        </div>
        <div className="relative group flex items-center text-white sm:hidden">
          <div className="cursor-pointer">
            <MdOutlineMoreVert />
          </div>

          <div className="absolute -left-4 mt-36 w-32 bg-gradient-to-b from-[#14143C] to-[#142878] text-white border-2 border-white rounded-xl shadow-lg opacity-0 scale-95 transform transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
          <ul className={`${ramabhadra.className} flex flex-col space-y-2 p-2`}>
            <li className="flex items-center space-x-2">
              <FaPlus />
              <span className="">Watchlist</span>
            </li>
            <li className="flex items-center space-x-2">
              <PiFilmReelFill />
              <span className="">Movies</span>
            </li>
            <li className="flex items-center space-x-2">
              <TbDeviceTvOldFilled />
              <span className="">Series</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaStar />
              <span className="">Originals</span>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div className="flex space-x-4 md:space-x-7">
        <GenreDropdown />
        <SearchInput />
      </div>
    </header>
  );
}

export default Header;
