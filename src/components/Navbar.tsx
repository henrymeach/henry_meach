'use client';

import localFont from 'next/font/local';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

const jersey10Font = localFont({ src: '../../public/fonts/Jersey10-Regular.ttf' });

function WebsiteTitle({className, onExit}: {
    className?: string;
    onExit?: () => void;
}) {
    return (
        <Link href="/" className={`${className}`} onClick={onExit}>
            <h2 className={`${jersey10Font.className} text-black text-4xl active:scale-98`}>
                henrymeach.com
            </h2>
        </Link>
    )
}

export function Links({className, onExit}: {
    className?: string;
    onExit?: () => void;
}) {
    return (
        <nav className={`${className} flex text-black flex-col md:flex-row items-center md:justify-between mt-8 mb-5`}>
            <WebsiteTitle className='mb-3 md:mb-0' />

            <ul className='flex flex-col md:flex-row space-y-2 items-center md:space-y-0 md:space-x-8 !text-5xl md:!text-[1rem] p-no-colour text-black font-bold'>
                <li onClick={onExit}>
                    <Link href="/" className='flex flex-row items-center space-x-2.5 active:scale-95'>
                        <p className="hover:text-sky-600 active:text-sky-600">
                            Home
                        </p>
                    </Link>
                </li>
                <li onClick={onExit}>
                    <Link href="/projects" className='flex flex-row items-center space-x-2.5 active:scale-95'>
                        <p className="hover:text-sky-600 active:text-sky-600">
                            Projects
                        </p>
                    </Link>
                </li>
                <li onClick={onExit}>
                    <Link href="/henry" className='flex flex-row items-center space-x-2.5 active:scale-95'>
                        <p className="hover:text-sky-600 active:text-sky-600">
                            About
                        </p>
                    </Link>
                </li>
                <li onClick={onExit}>
                    <Link href="#contact" className='flex flex-row items-center space-x-2.5 active:scale-95'>
                        <p className="hover:text-sky-600 active:text-sky-600">
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
    // sidebar open status
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    // prevent scrolling when sidebar menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'scroll';
    }, [menuOpen]);


    // close sidebar menu when screen width is resized to medium size
    useEffect(() => {
        const mql = window.matchMedia("(min-width: 768px)");

        const handleResize = (e: MediaQueryListEvent) => {
            if (e.matches) {
                setMenuOpen(false);
            };
        };

        mql.addEventListener('change', handleResize);

        return () => mql.removeEventListener('change', handleResize);
    }, []);

    return (
        <div className={`${className}`}>
            <WebsiteTitle className='flex md:hidden mt-8 mb-5' />
            <Links className='hidden md:flex' />

            <div className='md:hidden z-50 fixed right-[2%] top-[2%] active:drop-shadow-md active:bg-white rounded-lg transition'>
                <button className='w-15 h-15' onClick={() => setMenuOpen(true)}>
                    <Image src="/icons/hamburger-menu.svg" alt='hamburger menu icon' fill />
                </button>
            </div>

            <Sidebar className={`${menuOpen ? "translate-x-0" : "translate-x-full"} transition`} onExit={() => setMenuOpen(false)} />
        </div>
    )
}
