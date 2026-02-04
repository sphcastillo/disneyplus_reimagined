"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";


function SearchHintBubble() {
  const pathname = usePathname();
  const [show, setShow] = useState(true);

  if (pathname !== "/" || !show) return null;
  
  return (
    <div className='absolute top-16 mobile:top-[72px] xs:top-[76px] right-1 mx-2 z-50'>
      <div className="relative w-40 xxs:w-48 xs:w-48 md:w-48 bounce-hint-delay-1 rounded-lg pl-3 pr-1 py-2 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/95 via-indigo-300/90 to-purple-400/95 rounded-lg" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-300/25 via-transparent to-purple-300/25 rounded-lg" />
        
        <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_40%,rgba(255,255,255,0.35)_50%,transparent_60%)] bg-[length:200%_100%] animate-shimmer rounded-lg" />
        
        <div className="absolute inset-0 rounded-lg border border-blue-300/60 shadow-[0_0_12px_rgba(96,165,250,0.45),inset_0_1px_0_rgba(255,255,255,0.25)]" />
        

        <div className="relative flex items-start justify-between gap-0.5 xs:gap-2 z-10">
          <span className="flex-1 break-words text-pretty text-[11px] font-medium text-blue-950 drop-shadow-sm">
            ✨ Ready for some movie magic? Just start searching.
          </span>
          <button
            onClick={() => setShow(false)}
            className="p-1 -mt-1 hover:bg-white/30 rounded transition-colors duration-200 hover:scale-110 active:scale-95"
            aria-label="Close"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4 text-blue-900 drop-shadow-sm" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default SearchHintBubble