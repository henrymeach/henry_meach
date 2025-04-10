"use client";

import Image from "next/image";
import { ReactNode, useState } from "react"

interface RevealPictureProps {
    children: ReactNode;
}

export default function RevealPicture({children}: RevealPictureProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <>        
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {children}
            </div>
            <Image src="/images/henry.png" alt="Picture of me, Henry!" width={400} height={400}
                className={`animate-float absolute pointer-events-none duration-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
                ${hovered ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
            />
        </>

    )
}