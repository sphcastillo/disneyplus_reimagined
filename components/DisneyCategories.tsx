"use client";
import Image from "next/image";
import { Categories } from "@/data/Categories";
import { useState } from "react";


function DisneyCategories() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  return (
    <div className="pt-3 sm:pt-6 py-2 flex flex-wrap justify-center px-2 gap-6 lg:gap-7">
      {Categories.map((category, index) => (
        <div
          className={`bg-gray-800 w-[82px] sm:w-[120px] h-[52px] sm:h-[90px] flex items-center justify-center rounded-xl shadow-2xl `}
          key={index}
          onMouseEnter={() => setHoveredId(category.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Image
            src={hoveredId === category.id ? category.gif : category.src}
            alt={category.alt}
            className={` duration-300 transform ${
              hoveredId === category.id ? "w-full rounded-xl" : "w-[52px] sm:w-[72px]"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
export default DisneyCategories;
