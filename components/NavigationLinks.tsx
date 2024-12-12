import { AiFillHome } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { PiFilmReelFill } from "react-icons/pi";
import { TbDeviceTvOldFilled } from "react-icons/tb";
import { MdOutlineMoreVert } from "react-icons/md";
import { Ramabhadra } from 'next/font/google';


const ramabhadra = Ramabhadra({ weight: "400", subsets: ['latin'] });

function NavigationLinks() {
  return (
    <div className={`${ramabhadra.className} flex items-center space-x-6 md:space-x-8 uppercase`}>
      <div className="flex items-center space-x-2 text-white">
        <AiFillHome />
        <span className="hidden lg:flex">Home</span>
      </div>
      <div className="flex items-center space-x-2 text-white">
        <FaPlus />
        <span className="hidden lg:flex">Watchlist</span>
      </div>
      <div className="flex items-center space-x-2 text-white">
        <PiFilmReelFill />
        <span className="hidden lg:flex">Movies</span>
      </div>
      <div className="flex items-center space-x-2 text-white">
        <TbDeviceTvOldFilled />
        <span className="hidden lg:flex">Series</span>
      </div>
      <div className="flex items-center text-white sm:hidden">
        <MdOutlineMoreVert />
      </div>
    </div>
  );
}
export default NavigationLinks;
