export type image = {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

export const images: image[] = [
    {
        src: "/images/henry-2.jpeg",
        alt: "Picture of henry",
        width: 200,
        height: 200,
    },
    {
        src: "/images/henry-young.png",
        alt: "Picture of young henry",
        width: 200,
        height: 200,
    },
    {
        src: "/images/henry-3.jpeg",
        alt: "Picture of henry",
        width: 200,
        height: 200,
        className: "object-[0%_35%]"
    },
]