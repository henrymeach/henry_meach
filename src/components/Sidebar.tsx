"use client";

import Image from "next/image";
import { Links } from "./Navbar";
import { jacquard } from "./Footer";
import { useEffect, useState } from "react";

export interface SidebarProps {
    onExit: () => void;
    className?: string;
}

export default function Sidebar({onExit = () => {}, className}: SidebarProps) {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
    setYear(new Date().getFullYear())
    }, []);

    return (
        <div className={`${className} md:hidden fixed bg-white z-50 top-0 left-0 h-full w-full`}>
            <button onClick={onExit} className="absolute right-[2%] top-[2%] w-15 h-15 active:drop-shadow-md active:bg-white rounded-lg transition">
                <Image src="/icons/x.svg" alt="Exit sidebar button" fill />
            </button>
            <Links onExit={onExit} />

            <p
                className={`${jacquard.className} absolute translate-x-[50%] right-[50%] bottom-5 p-no-colour text-black !text-2xl`}
            >
                {`© ${year} — Henry Meach`}
            </p>
        </div>
    );
}