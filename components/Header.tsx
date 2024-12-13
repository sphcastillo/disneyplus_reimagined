import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";
import { MdOutlineMoreVert } from "react-icons/md";
import disneyPlusLogo from "@/images/disneyPluslogo.png";
import NavigationLinks from "./NavigationLinks";
import GenreServerDropdown from "./GenreServerDropdown";

function Header() {
  return (
    <header className="fixed flex items-center justify-between p-3 top-0 z-50 w-full bg-gradient-to-b from-[#14143C] to-[#141450]">
      <div className="flex items-center space-x-1 md:space-x-7">
        <Link href="/" className="mr-2 sm:mr-10">
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
        <div className="flex items-center text-white sm:hidden">
          <MdOutlineMoreVert />
        </div>
      </div>
      <div className="flex space-x-4 md:space-x-7">
        <GenreServerDropdown />
        <SearchInput />
      </div>
    </header>
  );
}

export default Header;
