import Image from "next/image";
// import Castle from "@/images/disneyCastle.png";
import CastleGIF from "@/images/disneyCastleGif.gif";


function CastleBanner() {
  return (
    <div className="">
      <div className="overflow-hidden mt-[64px] md:mt-3 relative cursor-pointer">
          <div className="flex lg:h-[578px] lg:max-w-6xl lg:mx-auto">
              <div className="flex-full min-w-0 relative">
                  <Image 
                      alt="Disney Studio Castle"
                      width={1920}
                      height={810}
                      src={CastleGIF}
                      unoptimized
                      priority
                      className="object-center object-cover  shadow-md  shadow-gray-900 drop-shadow-xl"
                  />
              </div>
          </div>
          {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/5 to-[#1A1C29]" /> */}
      </div>
    </div>
  )
}

export default CastleBanner;