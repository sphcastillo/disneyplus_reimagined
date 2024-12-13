"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Ramabhadra } from "next/font/google";

const ramabhadra = Ramabhadra({ weight: "400", subsets: ["latin"] });

interface Genre {
  id: number;
  name: string;
}

interface GenreDropdownProps {
    genres: Genre[];
}

const GenreDropdown: React.FC<GenreDropdownProps> = ({ genres }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={`${ramabhadra.className} flex`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white flex justify-center items-center">
          <div className="uppercase ml-7 sm:ml-0">Genres</div>
          <ChevronDown className="ml-1 hidden sm:block" />
        </DropdownMenuTrigger>
        {isHovered && (
          <DropdownMenuContent className="z-[500] bg-gradient-to-b from-[#14143C] to-[#142878] text-white">
            <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {genres.map((genre) => (
              <DropdownMenuItem key={genre.id}>
                <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                  {genre.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
}

export default GenreDropdown;
