"use client";
import { useState } from "react";
import { X } from "lucide-react";



function SearchHintBubble() {
  const [show, setShow] = useState(true);

  if (!show) return null;
  return (
    <div className='absolute top-16 mobile:top-[72px] xs:top-[76px] right-1 mx-2 z-50'>
        <div className="w-40 xxs:w-48 xs:w-48 md:w-48 bounce-hint-delay-1 bg-blue-100 border border-blue-300 text-blue-800 text-[11px] rounded-lg pl-3 pr-1 py-2 shadow-md">
        <div className="flex items-start justify-between gap-2">
          <span className="flex-1 break-words text-pretty">
          ✨ Ready for some movie magic? Just start searching.
          </span>
          <button
            onClick={() => setShow(false)}
            className="p-1 -mt-1 hover:bg-blue-200 rounded"
            aria-label="Close"
          >
            <X className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
        </div>
    </div>
  )
}
export default SearchHintBubble