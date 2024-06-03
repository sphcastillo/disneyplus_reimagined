import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import SearchInput from './SearchInput';
import GenreDropdown from './GenreDropdown';

import disneyPlusLogo from "@/images/disneyPluslogo.png";

function Header() {
  return (
    <header 
    className='fixed flex items-center justify-between p-3 top-0 z-20 w-full bg-gradient-to-b from-[#14143C] to-[#141450]'
      // className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900"
    >
        <Link href="/" className='mr-10'>
            <Image
                src={disneyPlusLogo}
                alt="Disney logo"
                width={100}
                className='cursor-pointer'
            />
        </Link>
        <div className='flex space-x-7'>
            <GenreDropdown />
            <SearchInput />
        </div>
    </header>
  )
}

export default Header;