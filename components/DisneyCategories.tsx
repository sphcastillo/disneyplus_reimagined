'use client';
import marvel from '@/images/categories/marvel.jpg';
import starwars from '@/images/categories/starwars.png';
import nationalgeographic from '@/images/categories/nationalgeographic.png';
import hulu from "@/images/categories/hulu.png";
import espn from "@/images/categories/espn.png";
import pixar from "@/images/categories/pixar.png";
import disney from "@/images/categories/disney.png";
import Image from 'next/image';
import disneygif from "@/public/gifs/disneygif.gif";
import pixargif from "@/public/gifs/pixargif.gif";
import espngif from "@/public/gifs/espngif.gif";
import hulugif from "@/public/gifs/hulugif.gif";
import marvelgif from "@/public/gifs/marvelgif.gif";
import nationalgeogif from "@/public/gifs/nationalgeogif.gif";
import starwarsgif from "@/public/gifs/starwarsgif.gif";
import { useState } from 'react';

const Categories = [
    {
        id: 1,
        title: "Disney",
        alt: "Disney",
        src: disney,
        gif: disneygif,
    },
    {
        id: 2,
        title: "Pixar",
        alt: "Pixar",
        src: pixar,
        gif: pixargif,
    },
    {
        id: 3,
        title: "Marvel",
        alt: "Marvel",
        src: marvel,
        gif: marvelgif,
    },
    {
        id: 4,
        title: "Star Wars",
        alt: "Star Wars",
        src: starwars,
        gif: starwarsgif,
    },
    {
        id: 5,
        title: "National Geographic",
        alt: "National Geographic",
        src: nationalgeographic,
        gif: nationalgeogif,
    },
    {
        id: 6,
        title: "Hulu",
        alt: "Hulu",
        src: hulu,
        gif: hulugif,
    },
    {
        id: 7,
        title: 'ESPN',
        alt: 'ESPN',
        src: espn,
        gif: espngif,
    }
];

function DisneyCategories() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    return (
        <div className="pt-6 py-2 flex flex-wrap justify-center gap-3">
            {Categories.map((category, index) => (
                <div 
                    className="py-4 border-2 border-gray-200 flex items-center justify-center rounded-xl px-5 shadow-2xl" 
                    key={index}
                    onMouseEnter={() => setHoveredId(category.id)}
                    onMouseLeave={() => setHoveredId(null)}
                >
                    <Image 
                        src={hoveredId === category.id ? category.gif: category.src}
                        alt={category.alt}
                        className='w-[72px] transition-transform duration-300 transform hover:scale-110'
                    />
                </div>
            ))}
        </div>
    )
}
export default DisneyCategories;