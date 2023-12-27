import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggler } from './ThemeToggler';

function Header() {
  return (
    <header>
        <Link href="/">
            <Image
                src="https://links.papareact.com/a943ae"
                alt="Disney logo"
                width={120}
                height={100}
                className='cursor-pointer invert-0 dark:invert'
            />
        </Link>
        <div className='flex space-x-2'>
            {/** GenreDropdown */}
            {/** SearchInput */}
            {/** Theretoggler */}
            <ThemeToggler/>
        </div>
    </header>
  )
}

export default Header