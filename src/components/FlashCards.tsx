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
    }[];
}) {
    const imagesLength = images.length;
    const [imageIndex, setImageIndex] = useState(0);
    const currentImage = images[imageIndex];
    const nextImage = images[(imageIndex + 1) % imagesLength]
    const nextNextImage = images[(imageIndex + 2) % imagesLength]
    const shouldHandleAnimationEnd = (imageIndex ) 

    const [clicked, setClicked] = useState(false);

    const onImageClick = () => {
        
        if (!clicked) {
            setClicked(true);
        }
        
        
    }

    const afterClick = () => {
        setClicked(false);
        setImageIndex((imageIndex + 1) % imagesLength);
        // setClicked(false);

        // setTimeout(() => {
        //     setImageIndex((imageIndex + 1) % imagesLength);
        // }, 50);
    }

    return (
        <button onClick={onImageClick} onAnimationEnd={afterClick} className="relative w-110 h-75">
            {images.map((image, index) => {
                const shouldHandleAnimationEnd = (imageIndex === index) && clicked;

                return (
                <Image key={index} src={image.src} alt={image.alt} fill
                    onAnimationEnd={
                        shouldHandleAnimationEnd
                         ? (() => {
                            setClicked(false);
                            
                            setImageIndex((imageIndex + 1) % imagesLength);
                            }) : undefined
                        }
                    className={clsx(
                        "object-cover bg-white rounded-xl",
                        {
                        // Current image
                        "animate-fade-out": imageIndex === index && clicked,
                        "z-50 drop-shadow-xl": imageIndex === index,

                        // Next image
                        "animate-slide-in":
                            (imageIndex + 1) % imagesLength === index && clicked,
                        "z-40 w-110 h-75 brightness-50 rotate-4 -translate-y-7 translate-x-9":
                            (imageIndex + 1) % imagesLength === index,

                        // Other images (just there to prevent flicker)
                        "z-30 w-110 h-75 brightness-50 rotate-4 -translate-y-7 translate-x-9": index !== imageIndex && index !== (imageIndex + 1) % imagesLength,
                        }
                    )}
                />
                )
            })}
        </button>
    );
}