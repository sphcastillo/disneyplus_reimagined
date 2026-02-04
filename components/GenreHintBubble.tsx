"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

export default function GenreHintBubble() {
  const pathname = usePathname();
  const [show, setShow] = useState(true);

  if (pathname !== "/" || !show) return null;

  return (
    <div className="absolute top-8 mobile:top-9 xs:top-6 xs590:top-6 md:top-7 -left-28 xxs470:-left-24 xxs500:-left-20 xs:-left-14 xs615:-left-10 sm660:-left-12 sm725:-left-6 md:-left-32 md800:-left-28 md835:-left-24 md865:-left-20 md895:-left-16 md920:-left-12 md955:-left-8 md985:-left-4 md1000:-left-0 lg:-left-32 lg1050:-left-28 lg1085:-left-24 lg1120:-left-20 6xl:-left-16 lg1180:-left-12 lg1220:-left-8 lg1250:-left-4 7xl:-left-0 xl1310:left-4 xl1345:left-9 xl1375:left-12 xl1400:left-14 xl1425:left-20 xl1500:left-28 xl1550:left-36 xl1600:left-44 xl1650:left-52 xl1720:left-60 xl1780:left-72 xl1850:left-80 xl1930:left-[350px] ts1989:left-96 xl2080:left-[420px] xl2140:left-[460px] xl2200:left-[485px] mx-2 z-50">
      <div className="relative w-36 sm705:w-40 bounce-hint-delay-0 rounded-lg pl-3 pr-1 py-2 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/95 via-yellow-300/90 to-amber-500/95 rounded-lg" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/20 via-transparent to-amber-300/30 rounded-lg" />
        
        <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_40%,rgba(255,255,255,0.3)_50%,transparent_60%)] bg-[length:200%_100%] animate-shimmer rounded-lg" />
        
        <div className="absolute inset-0 rounded-lg border border-amber-300/60 shadow-[0_0_12px_rgba(251,191,36,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]" />
        
        <div className="relative flex items-start justify-between gap-0.5 xs:gap-2 z-10">
          <span className="flex-1 break-words text-pretty text-[11px] font-medium text-amber-950 drop-shadow-sm">
            🎬 Pick a genre to keep things moving
          </span>
          <button
            onClick={() => setShow(false)}
            className="p-1 -mt-1 hover:bg-white/30 rounded transition-colors duration-200 hover:scale-110 active:scale-95"
            aria-label="Close"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4 text-amber-900 drop-shadow-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
