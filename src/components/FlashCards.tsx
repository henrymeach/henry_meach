"use client";

import Image from "next/image";
import { useState } from "react";

export default function FlashCards({images}: {
    images: {
        src: string;
        alt: string;
        width: number;
        height: number;
    }[];
}) {
    const imagesLength = images.length;
    const [imageIndex, setImageIndex] = useState(0);
    const currentImage = images[imageIndex];

    const onImageClick = () => {
        setImageIndex((imageIndex + 1) % imagesLength)
    }

    return (
        <div onClick={onImageClick} className="relative w-110 h-75 group">
            <Image src={currentImage.src} alt={currentImage.alt} fill objectFit="cover" className="rounded-xl bg-white z-50 drop-shadow-xl" />
            <div className="w-110 h-75 outline outline-gray-300 outline-3 bg-gray-200 rotate-4 rounded-xl -translate-y-7 translate-x-9 transition group-hover:-translate-y-9"></div>
        </div>
    );
}