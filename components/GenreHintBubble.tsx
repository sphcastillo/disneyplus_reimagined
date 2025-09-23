"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function GenreHintBubble() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="absolute top-8 mobile:top-9 xs:top-6 xs590:top-6 md:top-7 -left-28 xxs470:-left-24 xxs500:-left-20 xs:-left-14 xs615:-left-10 sm660:-left-12 sm725:-left-6 md:-left-32 md800:-left-28 md835:-left-24 md865:-left-20 md895:-left-16 md920:-left-12 md955:-left-8 md985:-left-4 md1000:-left-0 lg:-left-32 lg1050:-left-28 lg1085:-left-24 lg1120:-left-20 6xl:-left-16 lg1180:-left-12 lg1220:-left-8 lg1250:-left-4 7xl:-left-0 xl1310:left-4 xl1345:left-9 xl1375:left-12 xl1400:left-14 xl1425:left-20 xl1500:left-28 xl1550:left-36 xl1600:left-44 xl1650:left-52 xl1720:left-60 xl1780:left-72 xl1850:left-80 xl1930:left-[350px] ts1989:left-96 xl2080:left-[420px] xl2140:left-[460px] xl2200:left-[485px] mx-2 z-50">
      <div className="w-32 sm660:w-36 sm705:w-40 bounce-hint-delay-0 bg-yellow-100 border border-yellow-300 text-yellow-800 text-[11px] rounded-lg pl-3 pr-1 py-2 shadow-md">
        {/* Row with icon + wrapping message */}
        <div className="flex items-start justify-between gap-2">
          <span className="flex-1 break-words text-pretty">
            🎬 Pick a genre to keep things moving
          </span>
          <button
            onClick={() => setShow(false)}
            className="p-1 -mt-1 hover:bg-yellow-200 rounded"
            aria-label="Close"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
