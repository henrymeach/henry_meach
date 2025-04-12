'use client';

import localFont from 'next/font/local';
import Link from 'next/link';
// import { useState } from 'react';

const jersey10Font = localFont({ src: '../../public/fonts/Jersey10-Regular.ttf' });

function Links({className}: {
    className?: string;
}) {
    return (
        <nav className={`${className} flex text-black flex-col md:flex-row items-center md:justify-between mt-8 mb-5`}>
            <Link href="/">
                <h2 className={`${jersey10Font.className} text-3xl active:scale-98`}>
                    henrymeach.com
                </h2>
            </Link>

            <ul className='flex flex-col md:flex-row text-center md:space-x-8 p-no-colour text-black font-bold'>
                <li>
                    <Link href="/">
                        <p className="hover:!text-sky-600 active:scale-95">
                            Home
                        </p>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <p className="hover:!text-sky-600 active:scale-95">
                            Projects
                        </p>
                    </Link>
                </li>
                <li>
                    <Link href="/henry">
                        <p className="hover:!text-sky-600 active:scale-95">
                            About
                        </p>
                    </Link>
                </li>
                <li>
                    <Link href="#contact">
                        <p className="hover:!text-sky-600 active:scale-95">
                            Contact
                        </p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default function Navbar({className}: {
    className?: string;
}) {
    // const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <div className={`${className}`}>
            <Links className="md:flex" />

            {/* <div className='md:hidden z-50 fixed right-[2%] top-[2%]'>
                <button className='w-15 h-15' onClick={() => setMenuOpen(true)}>
                    <Image src="/icons/hamburger-menu.svg" alt='hamburger menu icon' fill />
                </button>
            </div> */}
        </div>
    )
}
