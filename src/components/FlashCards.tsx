"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from 'clsx';

export default function FlashCards({ images }: {
    images: {
        src: string;
        alt: string;
        width: number;
        height: number;
        className?: string;
    }[];
}) {
    const imagesLength = images.length;
    const [imageIndex, setImageIndex] = useState(0);

    const onImageClick = () => {
        setImageIndex((imageIndex + 1) % imagesLength);
    }

    return (
        <button onClick={onImageClick} className="relative w-[80%] h-75 group cursor-pointer">
            <Image src="/images/pointer.webp" alt="pointer icon" width={20} height={20} className="absolute z-8 left-[90%] -bottom-[4%] rotate-350 group-hover:scale-120 group-active:scale-80 md:group-active:scale-100 transition"/>
            {images.map((image, index) => {

                return (
                <Image key={index} src={image.src} alt={image.alt} fill
                    className={clsx(
                        `${image.className} absolute object-cover bg-white rounded-lg transition`,
                        {
                        // Current image
                        "z-7 brightness-100 rotate-0 translate-y-0 translate-x-0 drop-shadow-xl": index === imageIndex,

                        // Next image
                        "z-6 brightness-50 rotate-4 -translate-y-7 translate-x-9 group-hover:-translate-y-9":
                            index === (imageIndex + 1) % imagesLength,

                        // Other images (just there to prevent flicker)
                        "z-5 opacity-0 brightness-50 rotate-4 -translate-y-7 translate-x-9": index !== imageIndex && index !== (imageIndex +1) % imagesLength,
                        }
                    )}
                />
                )
            })}
        </button>
    );
}