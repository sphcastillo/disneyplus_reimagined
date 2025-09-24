import { AiFillHome } from "react-icons/ai";
import { FaPlus, FaStar } from "react-icons/fa";
import { PiFilmReelFill } from "react-icons/pi";
import { TbDeviceTvOldFilled } from "react-icons/tb";
import { MdOutlineMoreVert } from "react-icons/md";
import { ramabhadra } from "@/utils/fonts/fonts";
import Link from "next/link";

function NavigationLinks() {
  return (
    <div
      className={`${ramabhadra.className} flex items-center space-x-10 lg:space-x-6 uppercase`}
    >
      <div className="flex items-center space-x-2 text-white">
        <Link href="/" className="flex items-center space-x-2">
          <AiFillHome />
          <span className="hidden lg:flex text-sm">Home</span>
        </Link>
      </div>
      <div className="flex items-center space-x-2 text-white">
        <FaPlus />
        <span className="hidden 6xl:flex text-sm">Watchlist</span>
      </div>
      <div className="flex items-center space-x-2 text-white">
        <PiFilmReelFill />
        <span className="hidden lg:flex text-sm">Movies</span>
      </div>
      <div className="flex items-center space-x-2 text-white">
        <TbDeviceTvOldFilled />
        <span className="hidden lg:flex text-sm">Series</span>
      </div>
      <div className="flex items-center space-x-2 text-white">
        <FaStar />
        <span className="hidden lg:flex text-sm">Originals</span>
      </div>

      <div className="relative group flex items-center text-white sm:hidden">
        <div className="cursor-pointer">
          <MdOutlineMoreVert />
        </div>

        <div className="absolute -left-3 mt-32 w-36 bg-gradient-to-b from-[#14143C] to-[#142878] text-white border-2 border-white rounded-xl shadow-lg opacity-0 scale-95 transform transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
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
          </ul>
        </div>
      </div>
    </div>
  );
}
export default NavigationLinks;
