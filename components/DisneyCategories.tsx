"use client";
import Image from "next/image";
import { Categories } from "@/data/Categories";
import { useState, useEffect } from "react";

function DisneyCategories() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % Categories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-3 sm:pt-6 py-2 flex flex-wrap justify-center px-2 gap-6 lg:gap-7">
      {Categories.map((category, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            className={`w-[82px] sm:w-[120px] h-[52px] sm:h-[90px] flex items-center justify-center rounded-xl shadow-2xl ${isActive ? "bg-[#17171B]" : "bg-gray-800"}`}
            key={index}
          >
            <Image
              src={activeIndex === index ? category.gif : category.src}
              alt={category.alt}
              className={` duration-300 transform ${
                activeIndex === index ? "w-full rounded-xl" : "w-[52px] sm:w-[72px]"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
}
export default DisneyCategories;
